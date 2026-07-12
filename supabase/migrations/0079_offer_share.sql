-- Who an offer's owner has shared it with (view + comment only; the owner
-- stays the sole editor). One row = one contact granted access to one offer.
-- Contact-owned on the shared-with side: folded in by contact-merge
-- (mergeOfferShares), so a shared offer survives merging that contact. Rows
-- cascade-delete with either the offer or the contact.
create table offer_share (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid not null references offer (id) on delete cascade,
  contact_id uuid not null references contact (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (offer_id, contact_id)
);

create index offer_share_contact_idx on offer_share (contact_id);
create index offer_share_offer_idx on offer_share (offer_id);
