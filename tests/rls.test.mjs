import test from 'node:test';
import assert from 'node:assert/strict';
import { PGlite } from '@electric-sql/pglite';
import { readFile } from 'node:fs/promises';

const A = '11111111-1111-4111-8111-111111111111';
const B = '22222222-2222-4222-8222-222222222222';
test('real Postgres RLS: ownership, anonymous denial, reassignment, upsert and validation', async () => {
  const db = new PGlite();
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users (id uuid primary key);
      create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
      grant usage on schema auth, public to authenticated, anon;
      grant execute on function auth.uid() to authenticated, anon;
      insert into auth.users values ('${A}'), ('${B}');`);
    await db.exec(await readFile(new URL('../supabase/migrations/20260909082413_account_learning_sync.sql', import.meta.url), 'utf8'));
    for (const id of [A, B]) {
      await db.exec(`set role authenticated; select set_config('request.jwt.claim.sub', '${id}', false);
        insert into public.profiles (user_id,nickname) values ('${id}', 'owner');
        insert into public.user_settings (user_id) values ('${id}');
        insert into public.learning_progress (user_id,word_type,snapshot) values ('${id}','verb','{"v":4}'); reset role;`);
    }
    await db.exec(`set role authenticated; select set_config('request.jwt.claim.sub', '${A}', false);`);
    for (const table of ['profiles','user_settings','learning_progress']) {
      const rows = await db.query(`select user_id from public.${table}`);
      assert.deepEqual(rows.rows, [{ user_id: A }]);
      assert.equal((await db.query(`update public.${table} set user_id = '${B}' where user_id = '${B}' returning user_id`)).rows.length, 0);
      await assert.rejects(db.exec(`update public.${table} set user_id = '${B}' where user_id = '${A}'`), /row-level security/);
      await assert.rejects(db.exec(`delete from public.${table}`), /permission denied/);
    }
    await assert.rejects(db.exec(`insert into public.profiles(user_id) values ('${B}')`), /row-level security/);
    await assert.rejects(db.exec(`insert into public.learning_progress values ('${B}','noun','{"v":4}',now())`), /row-level security/);
    await assert.rejects(db.exec(`insert into public.user_settings(user_id) values ('${B}')`), /row-level security/);
    await db.exec(`insert into public.learning_progress(user_id,word_type,snapshot) values ('${A}','verb','{"v":4,"idx":7}') on conflict(user_id,word_type) do update set snapshot = excluded.snapshot`);
    assert.equal((await db.query('select snapshot from public.learning_progress')).rows[0].snapshot.idx, 7);
    await assert.rejects(db.exec(`update public.learning_progress set snapshot = '{"v":99}'`), /check constraint/);
    await assert.rejects(db.exec(`update public.profiles set nickname = repeat('x',41)`), /check constraint/);
    await db.exec('reset role; set role anon;');
    for (const table of ['profiles','user_settings','learning_progress']) await assert.rejects(db.query(`select * from public.${table}`), /permission denied/);
  } finally { await db.close(); }
});
