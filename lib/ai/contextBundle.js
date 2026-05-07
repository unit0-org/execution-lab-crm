// Build a Markdown context bundle for one contact — the blob that
// Phase 11's "Use as AI context" button copies/streams to whatever
// AI surface the user is in.
const formatPerson = (p) => `# ${p.display_name || 'Unnamed contact'}
Role: ${p.role || '—'}  ·  City: ${p.city || '—'}  ·  Lifecycle: ${p.lifecycle}
Met: ${p.met || '—'}
Goals: ${p.goals || '—'}
You owe: ${p.i_owe || '—'}`

const formatTimeline = (rows) => rows
  .map((r) => `- [${new Date(r.occurred_at).toISOString().slice(0, 10)}] ${r.entry_type}: ${r.title || ''}`)
  .join('\n')

export function buildContextBundle({ person, timeline }) {
  return [formatPerson(person), '## Recent activity', formatTimeline(timeline)].join('\n\n')
}
