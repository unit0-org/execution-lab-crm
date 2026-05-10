import { domainOf } from './internalDomains'

const MIN_DURATION_MINUTES = 15

const isAllDay = (ev) => !ev.start?.dateTime

const durationMinutes = (ev) => {
  const start = new Date(ev.start?.dateTime).getTime()
  const end   = new Date(ev.end?.dateTime).getTime()

  return Number.isFinite(start) && Number.isFinite(end) ? (end - start) / 60000 : 0
}

const externalAttendees = (ev, internalDomains) =>
  (ev.attendees || []).filter(
    (a) => a.email && !a.self && a.responseStatus !== 'declined' && !internalDomains.has(domainOf(a.email)),
  )

export function classifyEvent(ev, internalDomains) {
  if (isAllDay(ev)) return { qualifies: false, isRecurring: false, externals: [] }
  const externals = externalAttendees(ev, internalDomains)
  const qualifies = durationMinutes(ev) >= MIN_DURATION_MINUTES && externals.length > 0

  return { qualifies, isRecurring: Boolean(ev.recurringEventId), externals }
}
