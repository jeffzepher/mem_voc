import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
const source = await readFile(new URL('../src/practice.js', import.meta.url), 'utf8');

function setup() {
  const elements = new Map(), handlers = {}, saved = {};
  const element = id => {
    if (!elements.has(id)) elements.set(id, { textContent: '', value: '', classList: { toggle() {}, contains() { return false; } }, setAttribute() {}, querySelectorAll: () => [], addEventListener() {} });
    return elements.get(id);
  };
  const window = { addEventListener() {}, MemWordsAccount: { saveProgress: (type, p) => saved[type] = structuredClone(p), saveSettings() {} } };
  const context = vm.createContext({ window, document: { cookie: '', getElementById: element, addEventListener: (key, cb) => handlers[key] = cb },
    console, structuredClone, btoa, atob, Uint8Array, setTimeout: () => 1, clearTimeout() {}, alert() {}, confirm: () => true });
  vm.runInContext(source, context);
  vm.runInContext('renderAll = () => {}; renderEmptyState = () => {}; updateErrorBookUI = () => {}; showAnswerToast = () => {};', context);
  const run = code => vm.runInContext(code, context);
  return { window, context, run, saved, handlers };
}

test('practice stays locked until account data is loaded; shortcuts ignore form fields', () => {
  const a = setup();
  a.run('saveLocalState()'); assert.equal(Object.keys(a.saved).length, 0);
  a.window.Practice.start({}, {});
  a.handlers.keydown({ key: 'ArrowRight', target: { closest: () => ({}) } });
  assert.equal(a.run('state.currentIndex'), 0);
  a.handlers.keydown({ key: 'ArrowRight', target: { closest: () => null } });
  assert.equal(a.run('state.currentIndex'), 1);
});
test('snapshot restores exact index, answers, option order and mode on a new device', () => {
  const a = setup(); a.window.Practice.start({}, {});
  a.run("state.currentIndex=5; state.questions[5].options=['一','二','三','四']; state.questions[5].userAnswer='二'; state.questions[5].result='wrong'; saveLocalState()");
  const b = setup(); b.window.Practice.start(a.saved, { active_type: 'verb', sound_enabled: true });
  assert.equal(b.run('state.currentIndex'), 5);
  assert.deepEqual(JSON.parse(b.run('JSON.stringify(state.questions[5].options)')), ['一','二','三','四']);
  assert.equal(b.run('state.questions[5].userAnswer'), '二');
  assert.equal(b.run('state.soundEnabled'), true);
});
test('reviewed errors stay removed after returning to practice and reloading', () => {
  const a = setup(); a.window.Practice.start({}, {});
  a.run("handleAnswer('incorrect'); toggleErrorBook(); handleAnswer(state.questions[0].cn)");
  assert.equal(a.run('state.errorWords.length'), 0);
  a.run('toggleErrorBook()'); assert.equal(a.run('state.errorWords.length'), 0);
  const b = setup(); b.window.Practice.start(a.saved, {}); assert.equal(b.run('state.errorWords.length'), 0);
});
test('switching types keeps separate progress and reset only clears the active type', () => {
  const a = setup(); a.window.Practice.start({}, {});
  a.run('goToNext(); switchWordType("noun"); goToNext(); goToNext(); switchWordType("verb")');
  assert.equal(a.run('state.currentIndex'), 1);
  a.run('resetAll(); switchWordType("noun")'); assert.equal(a.run('state.currentIndex'), 2);
  a.run('switchWordType("verb")'); assert.equal(a.run('state.currentIndex'), 0);
});
test('legacy Cookie import is explicit and validates the original word catalog', () => {
  const a = setup(); a.window.Practice.start({}, {}); const legacy = { ...a.saved.verb, v: 3 }; delete legacy.questions;
  a.window.Practice.clear(); a.context.document.cookie = `vocab_mcq_state_v4_verb=${encodeURIComponent(JSON.stringify(legacy))}`;
  assert.equal(a.window.Practice.legacy().verb.v, 3);
  a.window.Practice.start({}, {}); assert.equal(a.run('state.currentIndex'), 0);
  const b = setup(); b.window.Practice.start({ verb: legacy }, {}); assert.equal(b.saved.verb.v, 4);
});
test('account clear removes all previous progress; malformed cloud data is rejected', () => {
  const a = setup(); a.window.Practice.start({}, {}); a.run('goToNext()');
  const broken = structuredClone(a.saved.verb); broken.questions[0].cn = 'tampered';
  assert.equal(a.window.Practice.validate('verb', broken), false);
  a.window.Practice.clear(); assert.equal(a.run('state.questions.length'), 0); assert.equal(a.window.Practice.ready, false);
  a.window.Practice.start({}, {}); assert.equal(a.run('state.currentIndex'), 0);
});
test('cloud option text is escaped before entering markup', () => {
  const a = setup(); assert.equal(a.run('escapeHTML(`<img src=x onerror="alert(1)">`)'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
});
