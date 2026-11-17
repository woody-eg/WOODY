-- Run once in Supabase: SQL Editor > New query
create table if not exists public.addresses (
  user_id uuid primary key references auth.users(id) on delete cascade,
  first text not null, last text not null, address text not null,
  city text not null, zip text not null, updated_at timestamptz default now()
);
alter table public.addresses enable row level security;
create policy "addr_select_own" on public.addresses for select using (auth.uid() = user_id);
create policy "addr_insert_own" on public.addresses for insert with check (auth.uid() = user_id);
create policy "addr_update_own" on public.addresses for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "addr_delete_own" on public.addresses for delete using (auth.uid() = user_id);
