-- A comment on an offer's discussion thread. Anyone who can see the offer
-- (its owner, or a contact it's shared with) can post; comments are shown
-- oldest-first. Contact-owned via author_contact_id — folded in by
-- contact-merge (mergeOfferComments). Cascades with the offer or the author.
create table offer_comment (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid not null references offer (id) on delete cascade,
  author_contact_id uuid not null references contact (id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create index offer_comment_offer_idx on offer_comment (offer_id);
create index offer_comment_author_idx on offer_comment (author_contact_id);
