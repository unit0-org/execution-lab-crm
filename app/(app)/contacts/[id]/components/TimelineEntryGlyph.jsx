// Single-character glyphs per entry_type — keeps the visual quiet
// while still distinguishing source. Pure unicode, no icon font.
const GLYPHS = {
  meeting_call: '◐',
  met_in_person: '◉',
  event_attended: '◎',
  event_registered: '○',
  page_followed: '◌',
  purchase: '✦',
  note: '·',
  follow_up_created: '⏵',
  follow_up_resolved: '✓',
}

export function TimelineEntryGlyph({ type }) {
  return <span aria-hidden>{GLYPHS[type] || '·'}</span>
}
