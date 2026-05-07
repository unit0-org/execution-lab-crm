import { TodaySection } from './TodaySection'
import { ActivityRow } from './ActivityRow'

export function RecentActivity({ entries }) {
  return (
    <TodaySection title="Recent activity" count={entries.length} empty="No activity yet.">
      {entries.map((e) => <ActivityRow key={e.id} entry={e} />)}
    </TodaySection>
  )
}
