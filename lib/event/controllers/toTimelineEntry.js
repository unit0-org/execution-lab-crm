import { eventStatus } from './eventStatus'

// Shape an event participant (with its event) into an activity entry.
export function toTimelineEntry(participant) {
  const event = participant.own_event || {}
  const { status, tone } = eventStatus(participant)

  return {
    id: `e:${participant.id}`,
    kind: 'event',
    title: event.title || 'Untitled event',
    date: event.date,
    status,
    statusTone: tone
  }
}
