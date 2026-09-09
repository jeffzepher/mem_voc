import test from 'node:test';
import assert from 'node:assert/strict';
import { SyncQueue } from '../src/sync.js';

const memory = () => {
  const values = new Map();
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
};
function make(storage, userId, write, extra = {}) {
  return new SyncQueue({ storage, userId, write, namespace: 'test', delay: 100000, ...extra });
}
test('coalesces edits by word type, preserves other types, and writes serially', async () => {
  const writes = []; let active = 0;
  const q = make(memory(), 'A', async row => {
    assert.equal(++active, 1); await Promise.resolve(); writes.push(row); active--;
  });
  q.enqueue('verb', { n: 1 }); q.enqueue('noun', { n: 2 }); q.enqueue('verb', { n: 3 });
  await q.flush(); assert.deepEqual(writes, [{ n: 3 }, { n: 2 }]); q.close();
});
test('edits arriving during a write are not dropped', async () => {
  let release; const writes = [];
  const q = make(memory(), 'A', async row => {
    writes.push(row);
    if (writes.length === 1) await new Promise(resolve => { release = resolve; });
  });
  q.enqueue('verb', { n: 1 }); const running = q.flush();
  q.enqueue('verb', { n: 2 }); release(); await running;
  assert.deepEqual(writes, [{ n: 1 }, { n: 2 }]); q.close();
});
test('failed writes survive reload and cannot appear in another account', async () => {
  const storage = memory();
  const q = make(storage, 'A', async () => { throw new Error('offline'); });
  q.enqueue('verb', { n: 9 }); await q.flush(); q.close();
  const b = make(storage, 'B', async () => assert.fail('B must not upload A')); await b.flush(); b.close();
  const writes = [];
  const restored = make(storage, 'A', async (row, id) => writes.push([row, id]));
  await restored.flush(); assert.deepEqual(writes, [[{ n: 9 }, 'A']]); restored.close();
});
test('closing an account ignores in-flight responses and retains pending work', async () => {
  const storage = memory(); let release; const status = [];
  const q = make(storage, 'A', () => new Promise(resolve => { release = resolve; }), { onStatus: s => status.push(s) });
  q.enqueue('verb', { n: 1 }); const running = q.flush(); q.close(); const count = status.length;
  release(); await running; assert.equal(status.length, count);
  const restored = make(storage, 'A', async () => {}); assert.equal(restored.pending.verb.n, 1); restored.close();
});
test('storage quota failure is visible, but successful network sync still works', async () => {
  const statuses = [], writes = [];
  const q = make({ getItem: () => null, setItem: () => { throw new Error('quota'); } }, 'A', async r => writes.push(r), { onStatus: s => statuses.push(s) });
  q.enqueue('verb', { n: 4 }); await q.flush();
  assert.equal(writes.length, 1); assert.ok(statuses.every(s => s.includes('本机存储不可用'))); q.close();
});
test('corrupt pending data blocks loading rather than silently overwriting it', () => {
  assert.throws(() => make({ getItem: () => '{broken' }, 'A', async () => {}), /无法读取/);
});
