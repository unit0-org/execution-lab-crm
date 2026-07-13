-- Who wrote a note. A Supabase auth uid, resolved for display via
-- organization_user.user_id — deliberately no FK, matching the existing
-- note_mention.mentioned_user_id convention (auth lives outside our schema).
alter table contact_note
  add column author_user_id uuid;

create index contact_note_author_user_id_idx
  on contact_note (author_user_id);

-- Notes predate authorship, so nobody was recorded. Attribute them to the
-- workspace owner (the sole admin), per the product decision.
update contact_note
set author_user_id = (
  select user_id from organization_user
  where role = 'admin' and user_id is not null
  order by created_at asc
  limit 1
)
where author_user_id is null;
