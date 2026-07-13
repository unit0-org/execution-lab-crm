-- A contact @-tagged in an offer comment (emailed once when tagged). Only
-- people who can see the offer may be tagged. Contact-owned via
-- mentioned_contact_id — folded in by contact-merge
-- (mergeOfferCommentMentions). The unique key keeps one tag per person per
-- comment and makes recording idempotent.
create table offer_comment_mention (
  id uuid primary key default gen_random_uuid(),
  offer_comment_id uuid not null
    references offer_comment (id) on delete cascade,
  mentioned_contact_id uuid not null references contact (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (offer_comment_id, mentioned_contact_id)
);

create index offer_comment_mention_contact_idx
  on offer_comment_mention (mentioned_contact_id);
