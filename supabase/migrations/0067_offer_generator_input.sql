-- One input row for the offer configurator (portal tool). Keyed to a
-- contact; input_type names the field — seed, audience, primary_outcome,
-- other_outcome, like_to_do, dont_want_to_do, extra, or a lever id — and
-- value holds its text. Single-valued types keep one row; the repeatable
-- types (other_outcome, like_to_do, dont_want_to_do, extra) may have many.
-- Folded on contact merge by a straight reassign (no per-contact uniqueness).
create table offer_generator_input (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contact (id) on delete cascade,
  input_type text not null,
  value text not null default '',
  created_at timestamptz not null default now()
);

create index offer_generator_input_contact_idx
  on offer_generator_input (contact_id);
