import { TodaySection } from './TodaySection'
import { DocumentMeetingCard } from './DocumentMeetingCard'

const TITLE = { high: 'Document these (overdue)', normal: 'Meetings to document' }

export function DocumentMeetingsSection({ rows, priority }) {
  const filtered = rows.filter((r) => r.priority === priority)
  if (filtered.length === 0) return null

  return (
    <TodaySection title={TITLE[priority]} count={filtered.length} empty="">
      {filtered.map((r) => <DocumentMeetingCard key={r.id} row={r} />)}
    </TodaySection>
  )
}
