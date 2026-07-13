-- User-built automations: "when <trigger> then <action>". Single-tenant, so
-- these are global (no organization_id, like the other domain entities).
create table automation (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  trigger_type text not null,
  trigger_config jsonb not null default '{}',
  action_type text not null,
  action_config jsonb not null default '{}',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index automation_trigger_idx on automation (trigger_type);

-- A log of every automation firing (observability). Deliberately holds NO
-- contact FK — it stays out of the contact-merge fold-in invariant; the
-- affected person is captured only as free text in `detail`.
create table automation_run (
  id uuid primary key default gen_random_uuid(),
  automation_id uuid not null references automation (id) on delete cascade,
  trigger_type text not null,
  status text not null,
  detail text,
  created_at timestamptz not null default now()
);

create index automation_run_automation_idx
  on automation_run (automation_id);
