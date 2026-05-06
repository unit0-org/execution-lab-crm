-- Execution Lab CRM — initial schema
-- See ARCHITECTURE doc for design decisions.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- ENUMS
-- ============================================================
CREATE TYPE entry_type AS ENUM (
  'met_in_person',
  'meeting_call',
  'event_attended',
  'event_registered',
  'page_followed',
  'purchase',
  'note',
  'follow_up_created',
  'follow_up_resolved'
);

CREATE TYPE source_type AS ENUM (
  'manual',
  'google_meet',
  'luma',
  'stripe',
  'fireflies'
);

CREATE TYPE registration_type AS ENUM (
  'rsvp',
  'invited',
  'waitlist'
);

CREATE TYPE user_role AS ENUM (
  'owner',
  'member'
);

-- ============================================================
-- TEAM
-- ============================================================
CREATE TABLE users (
  id    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  name  TEXT,
  role  user_role NOT NULL DEFAULT 'member'
);

-- ============================================================
-- CORE IDENTITY
-- ============================================================
CREATE TABLE google_accounts (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email          TEXT NOT NULL UNIQUE,
  label          TEXT,
  access_token   TEXT,
  refresh_token  TEXT,
  last_synced_at TIMESTAMPTZ
);

CREATE TABLE contacts (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  google_account_id UUID NOT NULL REFERENCES google_accounts(id) ON DELETE CASCADE,
  google_contact_id TEXT NOT NULL UNIQUE,
  display_name      TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE contact_emails (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  email      TEXT NOT NULL,
  is_primary BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE INDEX idx_contact_emails_email ON contact_emails(email);

CREATE TABLE contact_phones (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  phone      TEXT NOT NULL,
  label      TEXT
);

-- ============================================================
-- TIMELINE (append-only activity log)
-- ============================================================
CREATE TABLE timeline_entries (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id  UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  entry_type  entry_type NOT NULL,
  occurred_at TIMESTAMPTZ NOT NULL,
  title       TEXT,
  body        TEXT,
  source_id   UUID,
  source_type source_type NOT NULL DEFAULT 'manual',
  created_by  UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_timeline_entries_contact_id  ON timeline_entries(contact_id);
CREATE INDEX idx_timeline_entries_entry_type  ON timeline_entries(entry_type);
CREATE INDEX idx_timeline_entries_occurred_at ON timeline_entries(occurred_at);
CREATE INDEX idx_timeline_entries_source_type ON timeline_entries(source_type);
CREATE INDEX idx_timeline_entries_source      ON timeline_entries(source_type, source_id);

CREATE TABLE tags (
  id    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name  TEXT NOT NULL UNIQUE,
  color TEXT
);

CREATE TABLE entry_tags (
  id       UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entry_id UUID NOT NULL REFERENCES timeline_entries(id) ON DELETE CASCADE,
  tag_id   UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  UNIQUE (entry_id, tag_id)
);

CREATE TABLE follow_up_flags (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id  UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  entry_id    UUID REFERENCES timeline_entries(id) ON DELETE SET NULL,
  reason      TEXT,
  due_date    DATE,
  resolved_at TIMESTAMPTZ
);
CREATE INDEX idx_follow_up_flags_contact_id  ON follow_up_flags(contact_id);
CREATE INDEX idx_follow_up_flags_unresolved  ON follow_up_flags(contact_id) WHERE resolved_at IS NULL;

-- ============================================================
-- MEETINGS
-- ============================================================
CREATE TABLE meetings (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  google_event_id TEXT NOT NULL UNIQUE,
  title           TEXT,
  started_at      TIMESTAMPTZ,
  ended_at        TIMESTAMPTZ,
  meet_link       TEXT,
  transcript_url  TEXT
);

CREATE TABLE meeting_participants (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id UUID NOT NULL REFERENCES meetings(id) ON DELETE CASCADE,
  contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
  email      TEXT NOT NULL,
  matched_at TIMESTAMPTZ
);
CREATE INDEX idx_meeting_participants_meeting_id ON meeting_participants(meeting_id);
CREATE INDEX idx_meeting_participants_contact_id ON meeting_participants(contact_id);
CREATE INDEX idx_meeting_participants_email      ON meeting_participants(email);

-- ============================================================
-- LUMA
-- ============================================================
CREATE TABLE luma_events (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  luma_event_id TEXT NOT NULL UNIQUE,
  title         TEXT,
  description   TEXT,
  scheduled_at  TIMESTAMPTZ,
  luma_url      TEXT
);

CREATE TABLE luma_registrations (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  luma_event_id     UUID NOT NULL REFERENCES luma_events(id) ON DELETE CASCADE,
  contact_id        UUID REFERENCES contacts(id) ON DELETE SET NULL,
  email             TEXT NOT NULL,
  registration_type registration_type NOT NULL,
  attended          BOOLEAN NOT NULL DEFAULT FALSE,
  registered_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_luma_registrations_event_id   ON luma_registrations(luma_event_id);
CREATE INDEX idx_luma_registrations_contact_id ON luma_registrations(contact_id);
CREATE INDEX idx_luma_registrations_email      ON luma_registrations(email);

CREATE TABLE luma_page_followers (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id  UUID REFERENCES contacts(id) ON DELETE SET NULL,
  email       TEXT NOT NULL,
  followed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_luma_page_followers_contact_id ON luma_page_followers(contact_id);
CREATE INDEX idx_luma_page_followers_email      ON luma_page_followers(email);

-- ============================================================
-- STRIPE
-- ============================================================
CREATE TABLE stripe_customers (
  id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id         UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  stripe_customer_id TEXT NOT NULL UNIQUE
);

CREATE TABLE purchases (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  stripe_customer_id  UUID NOT NULL REFERENCES stripe_customers(id) ON DELETE CASCADE,
  stripe_payment_id   TEXT NOT NULL UNIQUE,
  product_name        TEXT,
  amount_cents        INTEGER NOT NULL,
  currency            CHAR(3) NOT NULL,
  purchased_at        TIMESTAMPTZ NOT NULL
);
CREATE INDEX idx_purchases_stripe_customer_id ON purchases(stripe_customer_id);

-- ============================================================
-- contact_status — derived view
-- Priority: customer > active > engaged > known > cold
-- ============================================================
CREATE OR REPLACE VIEW contact_status AS
SELECT
  c.id AS contact_id,
  CASE
    WHEN EXISTS (
      SELECT 1
      FROM stripe_customers sc
      JOIN purchases p ON p.stripe_customer_id = sc.id
      WHERE sc.contact_id = c.id
    ) THEN 'customer'
    WHEN EXISTS (
      SELECT 1 FROM timeline_entries te
      WHERE te.contact_id = c.id
        AND te.entry_type IN ('meeting_call', 'met_in_person')
        AND te.occurred_at > NOW() - INTERVAL '60 days'
    ) THEN 'active'
    WHEN EXISTS (
      SELECT 1 FROM luma_registrations lr WHERE lr.contact_id = c.id
      UNION ALL
      SELECT 1 FROM luma_page_followers lpf WHERE lpf.contact_id = c.id
    ) THEN 'engaged'
    WHEN EXISTS (
      SELECT 1 FROM timeline_entries te WHERE te.contact_id = c.id
    ) THEN 'known'
    ELSE 'cold'
  END AS status
FROM contacts c;
