import { TodaySection } from './TodaySection'
import { DocumentMeetingCard } from './DocumentMeetingCard'

const byPriority = (a, b) => {
  if (a.priority === b.priority) return 0

  return a.priority === 'high' ? -1 : 1
}

export function DocumentMeetingsSection({ rows }) {
  const ordered = [...rows].sort(byPriority)

  return (
    <TodaySection
      title="Meetings to document"
      count={ordered.length}
      empty="Nothing waiting on your notes."
    >
      {ordered.map((r) => <DocumentMeetingCard key={r.id} row={r} />)}
    </TodaySection>
  )
}
