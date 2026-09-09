import { createClient } from '@supabase/supabase-js';
import { SyncQueue } from './sync.js';

const $ = id => document.getElementById(id);
const practice = window.Practice;
let client, user = null, queue = null, profile = null, settings = null;
let generation = 0, mode = 'login', recovery = false, currentLoad = null;
let importResolve = null, available = false;
let authRevision = 0;
const config = window.MEMWORDS_CONFIG;
const namespace = `memwords:${config?.SUPABASE_URL || 'unconfigured'}:${new URL('.', location.href).pathname}`;
const callbackUrl = new URL(location.pathname.endsWith('/') ? './' : './index.html', location.href).href;

function show(panel) {
  for (const id of ['authPanel','loadPanel','accountBar','app']) $(id).hidden = !panel.includes(id);
  $('app').inert = $('app').hidden;
}
function message(text) { $('authMessage').textContent = text; }
function setMode(next) {
  mode = next;
  const isReset = next === 'reset', isSignup = next === 'signup', isForgot = next === 'forgot';
  $('authTitle').textContent = { login: '登录，继续你的学习', signup: '创建你的学习账号', forgot: '找回密码', reset: '设置新密码' }[next];
  $('authSubmit').textContent = { login: '登录', signup: '注册', forgot: '发送重设邮件', reset: '保存新密码' }[next];
  $('authSubmit').disabled = !available;
  $('emailLabel').hidden = isReset;
  $('authEmail').disabled = isReset;
  $('passwordLabel').hidden = isForgot;
  $('authPassword').disabled = isForgot;
  $('authPassword').autocomplete = next === 'login' ? 'current-password' : 'new-password';
  $('authPassword').minLength = next === 'login' ? 1 : 8;
  $('authPassword').value = '';
  $('confirmLabel').hidden = !(isSignup || isReset);
  $('authConfirm').disabled = !(isSignup || isReset);
  $('authConfirm').required = isSignup || isReset;
  $('authConfirm').value = '';
  $('loginMode').hidden = next === 'login' || isReset;
  $('signupMode').hidden = isSignup || isReset;
  $('forgotMode').hidden = isForgot || isReset;
  $('resendEmail').hidden = true;
  message('');
}
function clearAccount() {
  generation++;
  queue?.close();
  queue = null;
  user = null; profile = null; settings = null; currentLoad = null;
  importResolve?.(false); importResolve = null;
  $('importDialog').close(); $('profileDialog').close();
  $('profileNickname').value = ''; $('profileEmail').textContent = '';
  $('accountName').textContent = '我的账号';
  practice.clear();
}
function syncStatus(text) {
  $('syncStatus').textContent = text;
  $('syncRetry').hidden = text === '已同步' || text === '正在同步…';
}
function updateIdentity() {
  $('accountName').textContent = profile?.nickname || user?.email || '我的账号';
  $('profileEmail').textContent = user?.email || '';
  $('profileNickname').value = profile?.nickname || '';
}
async function checked(request) {
  const result = await request;
  if (result.error) throw result.error;
  return result.data;
}
function importChoice(email) {
  $('importAccount').textContent = `当前账号：${email}`;
  $('importDialog').showModal();
  return new Promise(resolve => { importResolve = resolve; });
}
function finishImport(accept) {
  $('importDialog').close();
  importResolve?.(accept); importResolve = null;
}

async function loadAccount(sessionUser) {
  if (user?.id === sessionUser.id && (practice.ready || currentLoad)) return currentLoad;
  clearAccount();
  user = sessionUser;
  const stamp = generation;
  const id = user.id;
  const valid = () => generation === stamp && user?.id === id;
  show(['loadPanel']); $('loadRetry').hidden = true;
  $('loadMessage').textContent = '正在安全读取你的资料和进度…';
  const task = (async () => {
    try {
      const [cloudProfile, cloudSettings, records] = await Promise.all([
        checked(client.from('profiles').select('*').eq('user_id', id).maybeSingle()),
        checked(client.from('user_settings').select('*').eq('user_id', id).maybeSingle()),
        checked(client.from('learning_progress').select('word_type,snapshot').eq('user_id', id))
      ]);
      if (!valid()) return;
      profile = cloudProfile || { nickname: '' };
      settings = cloudSettings || { sound_enabled: false, active_type: 'verb', legacy_import_decided: false };
      const snapshots = Object.fromEntries(records.map(r => [r.word_type, r.snapshot]));
      queue = new SyncQueue({ userId: id, namespace, storage: localStorage, onStatus: syncStatus,
        write: async (item, owner) => {
          if (!valid()) throw new Error('Session changed');
          const allowed = ['profiles','user_settings','learning_progress'];
          if (!allowed.includes(item.table)) throw new Error('Invalid pending table');
          const conflict = item.table === 'learning_progress' ? 'user_id,word_type' : 'user_id';
          const result = client.from(item.table).upsert({ ...item.row, user_id: owner }, { onConflict: conflict });
          await checked(result);
        }
      });
      // Pending changes belong to this user only, and are newer than their last successful write.
      for (const item of Object.values(queue.pending)) {
        if (!item?.row || !['profiles','user_settings','learning_progress'].includes(item.table)) throw new Error('本机待同步记录格式不兼容');
        if (item.table === 'learning_progress') snapshots[item.row.word_type] = item.row.snapshot;
        if (item.table === 'profiles') profile = item.row;
        if (item.table === 'user_settings') settings = item.row;
      }
      for (const [type, snapshot] of Object.entries(snapshots)) {
        if (!practice.validate(type, snapshot)) throw new Error('学习记录格式不兼容，已停止加载以保护原记录。');
      }
      if (!settings.legacy_import_decided) {
        const legacy = practice.legacy();
        const missing = Object.keys(legacy).filter(type => !snapshots[type]);
        if (missing.length && await importChoice(sessionUser.email)) {
          if (!valid()) return;
          // Insert-only protects progress created by another device while the dialog was open.
          for (const type of missing) {
            await checked(client.from('learning_progress').upsert({ user_id: id, word_type: type, snapshot: legacy[type] }, { onConflict: 'user_id,word_type', ignoreDuplicates: true }));
            if (!valid()) return;
          }
          const imported = await checked(client.from('learning_progress').select('word_type,snapshot').eq('user_id', id));
          if (!valid()) return;
          for (const row of imported) if (!snapshots[row.word_type]) snapshots[row.word_type] = row.snapshot;
        }
        if (!valid()) return;
        settings.legacy_import_decided = true;
      }
      if (!valid()) return;
      updateIdentity();
      practice.start(snapshots, settings);
      show(['accountBar','app']);
      if (!cloudProfile) queue.enqueue('profile', { table: 'profiles', row: { nickname: profile.nickname || '' } });
      saveSettings();
      queue.flush();
    } catch (error) {
      if (!valid()) return;
      queue?.close(); queue = null; practice.clear();
      show(['loadPanel']);
      $('loadMessage').textContent = `未能读取学习记录。原记录没有被覆盖。\n${error.message || '请检查网络后重试。'}`;
      $('loadRetry').hidden = false;
    } finally { if (valid()) currentLoad = null; }
  })();
  currentLoad = task;
  return task;
}
function saveSettings() {
  if (!practice.ready || !queue || !settings) return;
  settings = { ...settings, ...practice.settings };
  queue.enqueue('settings', { table: 'user_settings', row: {
    sound_enabled: settings.sound_enabled, active_type: settings.active_type,
    legacy_import_decided: settings.legacy_import_decided === true
  } });
}
window.MemWordsAccount = {
  saveProgress(type, snapshot) {
    if (!practice.ready || !queue) return;
    queue.enqueue(`progress:${type}`, { table: 'learning_progress', row: { word_type: type, snapshot } });
  }, saveSettings
};

async function logout() {
  // Save locally before locking the app; any unsent work remains under the old ID.
  practice.save();
  authRevision++;
  clearAccount(); recovery = false;
  show(['authPanel']); setMode('login');
  message('正在退出…'); $('authSubmit').disabled = true;
  const { error } = await client.auth.signOut({ scope: 'local' });
  $('authSubmit').disabled = !available;
  if (error) {
    show(['loadPanel']); $('loadRetry').hidden = true;
    $('loadMessage').textContent = '退出未完成，练习已锁定。请检查网络后再次点击退出登录。';
  } else message('已退出登录。');
}
function friendly(error) {
  const messages = {
    invalid_credentials: '邮箱或密码不正确。', email_not_confirmed: '请先打开邮件完成邮箱验证。',
    over_email_send_rate_limit: '邮件发送过于频繁，请稍后重试。', weak_password: '密码强度不足，请使用更长的密码。',
    same_password: '新密码不能与原密码相同。', user_already_exists: '此邮箱已有账号，请尝试登录或找回密码。'
  };
  return messages[error.code] || error.message || '操作失败，请稍后重试。';
}
$('authForm').addEventListener('submit', async event => {
  event.preventDefault(); if (!available) return;
  const action = mode, stamp = generation;
  const email = $('authEmail').value.trim(), password = $('authPassword').value;
  if (['signup','reset'].includes(action) && password !== $('authConfirm').value) return message('两次输入的密码不一致。');
  $('authSubmit').disabled = true; message('正在处理…');
  try {
    if (action === 'login') {
      const data = await checked(client.auth.signInWithPassword({ email, password }));
      await loadAccount(data.user);
    } else if (action === 'signup') {
      const data = await checked(client.auth.signUp({ email, password, options: { emailRedirectTo: callbackUrl } }));
      if (data.session) await loadAccount(data.user);
      else { message('请检查邮箱并点击验证链接，完成后返回登录。若已有账号，请直接登录或找回密码。'); $('resendEmail').hidden = false; }
    } else if (action === 'forgot') {
      await checked(client.auth.resetPasswordForEmail(email, { redirectTo: callbackUrl }));
      message('如果此邮箱可以接收重设邮件，你将收到密码重设链接，请检查收件箱及垃圾邮件。');
    } else {
      await checked(client.auth.updateUser({ password }));
      recovery = false;
      await logout(); message('密码已更新，请使用新密码登录。');
    }
  } catch (error) {
    if (generation === stamp || !user) {
      message(friendly(error));
      if (error.code === 'email_not_confirmed') $('resendEmail').hidden = false;
    }
  } finally { $('authPassword').value = ''; $('authConfirm').value = ''; $('authSubmit').disabled = !available; }
});
for (const [id, next] of [['loginMode','login'],['signupMode','signup'],['forgotMode','forgot']]) $(id).onclick = () => setMode(next);
$('resendEmail').onclick = async () => {
  if (!$('authEmail').reportValidity() || !available) return;
  $('resendEmail').disabled = true;
  try { await checked(client.auth.resend({ type: 'signup', email: $('authEmail').value.trim(), options: { emailRedirectTo: callbackUrl } })); message('验证邮件已请求发送，请检查邮箱。'); }
  catch (error) { message(friendly(error)); }
  finally { $('resendEmail').disabled = false; }
};
$('logout').onclick = logout; $('loadLogout').onclick = logout;
$('loadRetry').onclick = () => { if (user) loadAccount(user); };
$('syncRetry').onclick = () => queue?.flush();
$('openProfile').onclick = () => { updateIdentity(); $('profileMessage').textContent = ''; $('profileDialog').showModal(); };
$('closeProfile').onclick = () => $('profileDialog').close();
$('profileForm').onsubmit = event => {
  event.preventDefault(); if (!queue || !user) return;
  profile = { nickname: $('profileNickname').value.trim() };
  queue.enqueue('profile', { table: 'profiles', row: profile });
  updateIdentity(); $('profileMessage').textContent = '已保存到本机，云端同步状态见页面顶部。';
};
$('importAccept').onclick = () => finishImport(true);
$('importSkip').onclick = () => finishImport(false);
$('importDialog').addEventListener('cancel', event => { event.preventDefault(); finishImport(false); });
window.addEventListener('online', () => queue?.flush());
window.addEventListener('beforeunload', event => {
  if (queue && Object.keys(queue.pending).length) { event.preventDefault(); event.returnValue = ''; }
});
document.addEventListener('visibilitychange', () => { if (document.hidden) queue?.flush(); });
setInterval(() => { if (navigator.onLine) queue?.flush(); }, 15000);

async function bootstrap() {
  show(['authPanel']); setMode('login');
  try {
    if (!config?.SUPABASE_URL || !config?.SUPABASE_PUBLISHABLE_KEY?.startsWith('sb_publishable_')) throw new Error('网站尚未配置登录服务，请联系维护者完成部署配置。');
    recovery = new URLSearchParams(location.hash.slice(1)).get('type') === 'recovery';
    client = createClient(config.SUPABASE_URL, config.SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'implicit', storageKey: `${namespace}:auth` }
    });
    // The callback must be synchronous: defer Auth/database calls outside the auth lock.
    client.auth.onAuthStateChange((event, session) => {
      const revision = ++authRevision;
      if (event === 'SIGNED_OUT') recovery = false;
      if (event === 'PASSWORD_RECOVERY') recovery = true;
      if (event === 'SIGNED_OUT' || (user && session?.user.id !== user.id)) {
        clearAccount(); show(['authPanel']); setMode('login');
      }
      if (session && recovery) {
        clearAccount(); show(['authPanel']); setMode('reset');
      } else if (session) {
        setTimeout(() => { if (!recovery && revision === authRevision) loadAccount(session.user); }, 0);
      }
    });
    const data = await checked(client.auth.getSession());
    available = true;
    if (recovery && data.session) { show(['authPanel']); setMode('reset'); }
    else if (data.session && authRevision === 0) await loadAccount(data.session.user);
    else if (data.session) $('authSubmit').disabled = false;
    else { setMode('login'); message('登录后开始练习，学习记录将自动同步。'); }
  } catch (error) { message(friendly(error)); }
}
bootstrap();
