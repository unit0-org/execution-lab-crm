import { isoDate } from '@/lib/portal/isoDate'
import { todayIso } from '@/lib/portal/todayIso'

// "attended/registered (rate%)" for an event — omits the rate when
// nobody registered, so we never divide by zero. An upcoming event has no
// attendance yet, so we show just the registered count, not a 0/X.
export function attendanceLabel(event) {
  const attended = Number(event.checked_in)
  const registered = Number(event.registered)

  if (isUpcoming(event)) return `${registered}`

  if (!registered) return `${attended}/${registered}`

  const rate = Math.round((attended / registered) * 100)

  return `${attended}/${registered} (${rate}%)`
}

function isUpcoming(event) {
  return isoDate(event.date) > todayIso()
}
