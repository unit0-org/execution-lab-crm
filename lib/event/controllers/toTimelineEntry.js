import { toStatusLabel } from './statusLabel'
import { statusTone } from './statusTone'

// Shape a participant (with its event) into a contact-timeline entry.
export function toTimelineEntry(participant) {
  const event = participant.own_event || {}
  const status = toStatusLabel(participant)

  return {
    id: participant.id,
    title: event.title || 'Untitled event',
    date: event.date,
    status,
    statusTone: statusTone(status)
  }
}
