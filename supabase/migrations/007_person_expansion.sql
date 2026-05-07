-- Phase 2: expand the person model so the rest of the app has somewhere
-- to write notes, linked resources, action items, org affiliation, etc.

-- New enums
CREATE TYPE lifecycle AS ENUM ('active', 'dormant', 'archived');
CREATE TYPE resource_kind AS ENUM (
  'gdrive_folder', 'gdrive_doc', 'gdrive_sheet', 'gdrive_slides', 'notion', 'link'
);
CREATE TYPE action_item_source AS ENUM ('parsed', 'manual');

-- Orgs first (contacts.org_id needs them)
CREATE TABLE orgs (
  id     UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name   TEXT NOT NULL,
  domain TEXT,
  sector TEXT
);
CREATE INDEX idx_orgs_name ON orgs(name);

-- Expand contacts
ALTER TABLE contacts ADD COLUMN role      TEXT;
ALTER TABLE contacts ADD COLUMN warmth    SMALLINT CHECK (warmth BETWEEN 1 AND 5);
ALTER TABLE contacts ADD COLUMN met       TEXT;
ALTER TABLE contacts ADD COLUMN goals     TEXT;
ALTER TABLE contacts ADD COLUMN i_owe     TEXT;
ALTER TABLE contacts ADD COLUMN city      TEXT;
ALTER TABLE contacts ADD COLUMN lifecycle lifecycle NOT NULL DEFAULT 'active';
ALTER TABLE contacts ADD COLUMN org_id    UUID REFERENCES orgs(id) ON DELETE SET NULL;
CREATE INDEX idx_contacts_org_id    ON contacts(org_id);
CREATE INDEX idx_contacts_lifecycle ON contacts(lifecycle);

-- Editable contact-type list (managed like labels) + assignments junction
CREATE TABLE contact_types (
  id    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name  TEXT NOT NULL UNIQUE,
  color TEXT
);

CREATE TABLE contact_type_assignments (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  type_id    UUID NOT NULL REFERENCES contact_types(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (contact_id, type_id)
);
CREATE INDEX idx_cta_contact_id ON contact_type_assignments(contact_id);
CREATE INDEX idx_cta_type_id    ON contact_type_assignments(type_id);

-- Socials (Twitter handle, LinkedIn URL, etc.)
CREATE TABLE contact_socials (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  handle     TEXT NOT NULL,
  kind       TEXT NOT NULL
);
CREATE INDEX idx_contact_socials_contact_id ON contact_socials(contact_id);

-- Linked resources (Drive folders, Docs, Notion pages, arbitrary URLs)
CREATE TABLE contact_resources (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  url        TEXT NOT NULL,
  kind       resource_kind NOT NULL DEFAULT 'link',
  label      TEXT,
  note       TEXT,
  added_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_contact_resources_contact_id ON contact_resources(contact_id);

-- Pinned freeform notes (separate from manual_entries timeline events)
CREATE TABLE notes (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  body       TEXT NOT NULL,
  pinned     BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_notes_contact_id ON notes(contact_id);
CREATE INDEX idx_notes_pinned     ON notes(contact_id) WHERE pinned;

-- Action items (parsed from Log Interaction or manual)
CREATE TABLE action_items (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id      UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  owner_person_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
  text            TEXT NOT NULL,
  due_at          DATE,
  done_at         TIMESTAMPTZ,
  source          action_item_source NOT NULL DEFAULT 'manual',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_action_items_contact_id ON action_items(contact_id);
CREATE INDEX idx_action_items_open       ON action_items(contact_id) WHERE done_at IS NULL;
