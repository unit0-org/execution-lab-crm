-- Member portal + registration platform: cohorts, registrations, a global
-- waitlist, and editable email templates. Pricing is never stored — only
-- the Stripe Price IDs are kept; Stripe stays the source of truth.

create table cohort (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id) on delete cascade,
  label text not null,
  start_date date not null,
  capacity integer not null,
  description text,
  stripe_price_id text not null,
  stripe_early_bird_price_id text not null,
  early_bird_deadline date not null,
  status text not null default 'draft'
    check (status in ('draft', 'open', 'closed')),
  created_at timestamptz not null default now()
);

create index cohort_org_idx on cohort (organization_id);

create table registration (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id) on delete cascade,
  cohort_id uuid not null references cohort (id) on delete cascade,
  contact_id uuid references contact (id) on delete set null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  company text,
  role text,
  referral_source text,
  stripe_session_id text unique,
  stripe_payment_intent_id text,
  amount_total integer,
  currency text not null default 'cad',
  promo_code text,
  discount_total integer,
  status text not null default 'pending'
    check (status in ('pending', 'paid', 'failed', 'expired')),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create index registration_cohort_idx on registration (cohort_id);
create index registration_email_idx on registration (organization_id, email);

create table waitlist_entry (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id) on delete cascade,
  contact_id uuid references contact (id) on delete set null,
  first_name text,
  last_name text,
  email text not null,
  status text not null default 'waiting'
    check (status in ('waiting', 'invited', 'converted')),
  invite_token text unique,
  invite_cohort_id uuid references cohort (id) on delete set null,
  invited_at timestamptz,
  invite_expires_at timestamptz,
  converted_at timestamptz,
  created_at timestamptz not null default now(),
  unique (organization_id, email)
);

create index waitlist_entry_order_idx
  on waitlist_entry (organization_id, created_at);

create table email_template (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organization (id) on delete cascade,
  template_key text not null,
  subject text not null,
  body text not null,
  updated_at timestamptz not null default now(),
  unique (organization_id, template_key)
);

-- RLS on (app connects via the session-pooler superuser, which bypasses
-- RLS; this blocks any direct PostgREST / anon-key access).
alter table cohort         enable row level security;
alter table registration   enable row level security;
alter table waitlist_entry enable row level security;
alter table email_template enable row level security;
