-- Allow idempotent upsert from the Meet sync — same meeting + email
-- should always resolve to the same row.
ALTER TABLE meeting_participants
  ADD CONSTRAINT meeting_participants_meeting_email_unique
  UNIQUE (meeting_id, email);
