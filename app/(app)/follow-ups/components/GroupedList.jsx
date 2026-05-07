import { EmptyState } from '@/ui/EmptyState'
import { Group } from './Group'

export function GroupedList({ groups }) {
  const total = groups.overdue.length + groups.today.length + groups.thisWeek.length + groups.later.length
  if (total === 0) return <EmptyState>No open follow-ups. Inbox-zero on relationships.</EmptyState>

  return (
    <>
      <Group title="Overdue"   flags={groups.overdue} />
      <Group title="Today"     flags={groups.today} />
      <Group title="This week" flags={groups.thisWeek} />
      <Group title="Later"     flags={groups.later} />
    </>
  )
}
