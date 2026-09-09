// Read-only smoke test. Does not register users, send emails, or print configuration values.
import { readFile } from 'node:fs/promises';
const local = JSON.parse(await readFile('config.local.json', 'utf8'));
const base = local.SUPABASE_URL;
const headers = { apikey: local.SUPABASE_PUBLISHABLE_KEY };
const settings = await fetch(`${base}/auth/v1/settings`, { headers });
if (!settings.ok) throw new Error(`Auth settings HTTP ${settings.status}`);
const auth = await settings.json();
console.log(JSON.stringify({ emailProvider: auth.external?.email, signupDisabled: auth.disable_signup, emailAutoConfirm: auth.mailer_autoconfirm }));
for (const table of ['profiles','user_settings','learning_progress']) {
  const result = await fetch(`${base}/rest/v1/${table}?select=user_id&limit=1`, { headers });
  if (![401,403].includes(result.status)) throw new Error(`Anonymous access did not fail closed: ${table}, HTTP ${result.status}`);
  console.log(`${table}: anonymous access denied (${result.status})`);
}
