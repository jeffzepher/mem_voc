-- Auth owns passwords and email. No privileged key or security-definer function is needed.
create table public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  nickname text not null default '' check (char_length(nickname) <= 40),
  updated_at timestamptz not null default now()
);

create table public.user_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  sound_enabled boolean not null default false,
  active_type text not null default 'verb' check (active_type in ('verb', 'noun')),
  legacy_import_decided boolean not null default false,
  updated_at timestamptz not null default now()
);

create table public.learning_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  word_type text not null check (word_type in ('verb', 'noun')),
  snapshot jsonb not null check (jsonb_typeof(snapshot) = 'object' and snapshot ? 'v' and snapshot->>'v' in ('2','3','4') and octet_length(snapshot::text) <= 2000000),
  updated_at timestamptz not null default now(),
  primary key (user_id, word_type)
);

create function public.memwords_touch_updated_at()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  new.updated_at := clock_timestamp();
  return new;
end;
$$;
revoke all on function public.memwords_touch_updated_at() from public, anon, authenticated;

create trigger profiles_updated_at before update on public.profiles
for each row execute function public.memwords_touch_updated_at();
create trigger user_settings_updated_at before update on public.user_settings
for each row execute function public.memwords_touch_updated_at();
create trigger learning_progress_updated_at before update on public.learning_progress
for each row execute function public.memwords_touch_updated_at();

alter table public.profiles enable row level security;
alter table public.user_settings enable row level security;
alter table public.learning_progress enable row level security;

revoke all on public.profiles, public.user_settings, public.learning_progress from public, anon, authenticated;
grant select, insert, update on public.profiles, public.user_settings, public.learning_progress to authenticated;

create policy profiles_read_own on public.profiles for select to authenticated
using ((select auth.uid()) = user_id);
create policy profiles_insert_own on public.profiles for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy profiles_update_own on public.profiles for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy settings_read_own on public.user_settings for select to authenticated
using ((select auth.uid()) = user_id);
create policy settings_insert_own on public.user_settings for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy settings_update_own on public.user_settings for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy progress_read_own on public.learning_progress for select to authenticated
using ((select auth.uid()) = user_id);
create policy progress_insert_own on public.learning_progress for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy progress_update_own on public.learning_progress for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
