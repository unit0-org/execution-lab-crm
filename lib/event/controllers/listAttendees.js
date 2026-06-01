import { EventParticipant } from '../models'
import { Contact, ContactEmail } from '../../db/models'
import { toAttendee } from './toAttendee'

const byCheckedInThenName = (a, b) =>
  Number(b.checkedIn) - Number(a.checkedIn) || a.name.localeCompare(b.name)

// Everyone on the event, checked-in first then alphabetical.
export async function listAttendees(eventId) {
  const rows = await EventParticipant.findAll({
    where: { own_event_id: eventId },
    include: [{
      model: Contact,
      as: 'contact',
      include: [{ model: ContactEmail, as: 'contact_email' }]
    }]
  })

  return rows.map((r) => toAttendee(r.toJSON())).sort(byCheckedInThenName)
}
