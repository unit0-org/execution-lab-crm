import { Inline } from '@/ui/layout/Inline'
import { StatCard } from './StatCard'

export function EventStats({ event }) {
  const reg = event.registered || 0
  const rate = reg ? Math.round((event.checked_in / reg) * 100) : 0

  return (
    <Inline gap="md">
      <StatCard label="Checked in / Registered"
        value={`${event.checked_in}/${reg}`} />
      <StatCard label="Attendance rate" value={`${rate}%`} />
      <StatCard label="Returning attendees" value={event.returning} />
    </Inline>
  )
}
