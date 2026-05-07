-- Phase 11: cache the daily AI briefing once per day so Today renders
-- instantly (no per-page-view LLM call).
CREATE TABLE daily_briefings (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  briefing_date DATE NOT NULL UNIQUE,
  body          TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_daily_briefings_date ON daily_briefings(briefing_date DESC);
