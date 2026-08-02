import { toAttendee } from './toAttendee'

const UNTITLED = 'Untitled event'

// An attendee row that also says which event it belongs to — the
// cross-event list shows the same person once per event, so the event
// is the column that tells two rows apart.
export function toParticipantRow(participant) {
  const event = participant.own_event || {}

  return {
    ...toAttendee(participant),
    eventId: event.id,
    eventTitle: event.title || UNTITLED,
    eventDate: event.date
  }
}
