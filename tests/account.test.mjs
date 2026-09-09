import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
import { SyncQueue } from '../src/sync.js';

const source = (await readFile(new URL('../src/account.js', import.meta.url), 'utf8')).replace(/^import .*;\n/gm, '');
const tick = () => new Promise(resolve => setImmediate(resolve));
function setup({ initial = null, failLoad = false, deferred = null, hash = '' } = {}) {
  const nodes = new Map(), timers = new Map(), writes = [], authCalls = [];
  let timerId = 0, authCallback;
  function node(id) {
    if (!nodes.has(id)) nodes.set(id, { hidden: false, disabled: false, value: '', textContent: '', listeners: {},
      addEventListener(key, cb) { this.listeners[key] = cb; },
      close() { this.open = false; }, showModal() { this.open = true; }, reportValidity() { return true; } });
    return nodes.get(id);
  }
  const storageData = new Map();
  const storage = { getItem: key => storageData.get(key) ?? null, setItem: (key, value) => storageData.set(key, value) };
  const practice = { ready: false, types: ['verb','noun'], settings: { sound_enabled: false, active_type: 'verb' },
    clear() { this.ready = false; }, start(snapshots, settings) { this.ready = true; this.loaded = { snapshots, settings }; }, save() {}, legacy: () => ({}), validate: () => true };
  const client = {
    auth: {
      onAuthStateChange(cb) { authCallback = cb; },
      async getSession() { authCallback('INITIAL_SESSION', initial); return { data: { session: initial }, error: null }; },
      async signInWithPassword(input) { authCalls.push(['login', input]); return { data: null, error: { code: 'invalid_credentials' } }; },
      async signUp(input) { authCalls.push(['signup', input]); return { data: { session: null, user: null }, error: null }; },
      async resetPasswordForEmail(email, options) { authCalls.push(['forgot', email, options]); return { data: {}, error: null }; },
      async updateUser(input) { authCalls.push(['reset', input]); return { data: {}, error: null }; },
      async signOut() { authCallback('SIGNED_OUT', null); return { error: null }; }
    },
    from(table) {
      let row, owner;
      const query = {
        select() { return query; }, eq(key, val) { owner = val; return query; }, maybeSingle() { return query; },
        upsert(value) { row = value; return query; },
        then(resolve, reject) {
          if (row) { writes.push({ table, row }); return Promise.resolve({ data: null, error: null }).then(resolve, reject); }
          if (deferred) return deferred.promise.then(() => ({ data: table === 'learning_progress' ? [] : null, error: null })).then(resolve, reject);
          return Promise.resolve({ data: table === 'learning_progress' ? [] : null, error: failLoad ? { message: 'offline' } : null }).then(resolve, reject);
        }
      };
      return query;
    }
  };
  const window = { Practice: practice, MEMWORDS_CONFIG: { SUPABASE_URL: 'https://test.supabase.co', SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test' }, addEventListener() {} };
  const context = vm.createContext({ window, document: { getElementById: node, addEventListener() {} }, location: { href: 'https://jeffzepher.github.io/mem_voc/' + hash, pathname: '/mem_voc/', hash },
    localStorage: storage, navigator: { onLine: true }, createClient: () => client, SyncQueue, URL, URLSearchParams, structuredClone, console,
    setTimeout: cb => { timers.set(++timerId, cb); return timerId; }, clearTimeout: id => timers.delete(id), setInterval() {} });
  vm.runInContext(source, context);
  return { node, practice, authCalls, writes, context, event: (event, session) => authCallback(event, session),
    async deferred() { const list = [...timers.values()]; timers.clear(); for (const cb of list) cb(); await tick(); await tick(); },
    dispose() { vm.runInContext('clearAccount()', context); }, run: code => vm.runInContext(code, context) };
}
test('signed-out startup is gated and failed login reports a usable error', async () => {
  const a = setup(); await tick();
  assert.equal(a.practice.ready, false); assert.equal(a.node('app').hidden, true);
  a.node('authEmail').value = 'test@example.com'; a.node('authPassword').value = 'password';
  await a.node('authForm').listeners.submit({ preventDefault() {} });
  assert.match(a.node('authMessage').textContent, /邮箱或密码/); a.dispose();
});
test('sign-up and recovery links retain the GitHub repository subpath', async () => {
  const a = setup(); await tick();
  a.node('signupMode').onclick(); a.node('authEmail').value = 'test@example.com'; a.node('authPassword').value = a.node('authConfirm').value = 'password';
  await a.node('authForm').listeners.submit({ preventDefault() {} });
  assert.equal(a.authCalls[0][1].options.emailRedirectTo, 'https://jeffzepher.github.io/mem_voc/');
  assert.match(a.node('authMessage').textContent, /验证链接/);
  a.node('forgotMode').onclick(); await a.node('authForm').listeners.submit({ preventDefault() {} });
  assert.equal(a.authCalls[1][2].redirectTo, 'https://jeffzepher.github.io/mem_voc/'); a.dispose();
});
test('cloud load failure leaves the app locked and never writes an empty snapshot', async () => {
  const a = setup({ initial: { user: { id: 'A', email: 'a@example.com' } }, failLoad: true });
  await tick(); await a.deferred();
  assert.equal(a.practice.ready, false); assert.equal(a.writes.length, 0); assert.equal(a.node('loadRetry').hidden, false); a.dispose();
});
test('signing out during cloud reads discards late data and writes nothing', async () => {
  let release; const deferred = { promise: new Promise(resolve => { release = resolve; }) };
  const a = setup({ initial: { user: { id: 'A' } }, deferred }); await tick(); await a.deferred();
  a.event('SIGNED_OUT', null); release(); await tick(); await tick();
  assert.equal(a.practice.ready, false); assert.equal(a.writes.length, 0); assert.equal(a.node('authPanel').hidden, false); a.dispose();
});
test('a queued old sign-in cannot resurrect a signed-out account', async () => {
  const a = setup(); await tick(); a.event('SIGNED_IN', { user: { id: 'A' } }); a.event('SIGNED_OUT', null);
  await a.deferred(); assert.equal(a.practice.ready, false); assert.equal(a.writes.length, 0); a.dispose();
});
test('recovery sessions show password form without loading practice', async () => {
  const a = setup({ initial: { user: { id: 'A' } }, hash: '#type=recovery' });
  await tick(); await a.deferred();
  assert.equal(a.practice.ready, false); assert.equal(a.node('authTitle').textContent, '设置新密码');
  a.node('authPassword').value = a.node('authConfirm').value = 'new-password';
  await a.node('authForm').listeners.submit({ preventDefault() {} });
  assert.equal(a.authCalls[0][0], 'reset'); assert.match(a.node('authMessage').textContent, /密码已更新/); a.dispose();
});
test('loaded profile changes are queued with the authenticated user ID', async () => {
  const a = setup({ initial: { user: { id: 'A', email: 'a@example.com' } } }); await tick(); await a.deferred();
  assert.equal(a.practice.ready, true); a.node('profileNickname').value = ' Learner ';
  a.node('profileForm').onsubmit({ preventDefault() {} }); await a.run('queue.flush()');
  assert.ok(a.writes.every(w => w.row.user_id === 'A'));
  assert.equal(a.writes.filter(w => w.table === 'profiles').at(-1).row.nickname, 'Learner'); a.dispose();
});
