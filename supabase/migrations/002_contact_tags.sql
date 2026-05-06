-- Contact ↔ tag junction. Reuses the existing `tags` table so the
-- same tag set can apply to both timeline entries and contacts.

CREATE TABLE contact_tags (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  tag_id     UUID NOT NULL REFERENCES tags(id)     ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (contact_id, tag_id)
);

CREATE INDEX idx_contact_tags_contact_id ON contact_tags(contact_id);
CREATE INDEX idx_contact_tags_tag_id     ON contact_tags(tag_id);
