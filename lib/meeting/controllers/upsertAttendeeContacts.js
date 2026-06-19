import { upsertContact } from '@/lib/contact/controllers/upsertContact'

// Resolve every attendee to a contact, pairing each contact with the
// attendee it came from so participants can be linked afterwards.
export function upsertAttendeeContacts(attendees) {
  return Promise.all(
    attendees.map(async (attendee) => ({
      attendee,
      contact: await upsertContact(attendee)
    }))
  )
}
