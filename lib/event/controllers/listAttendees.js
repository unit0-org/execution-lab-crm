import { Op } from 'sequelize'
import { EventParticipant } from '../models'
import { Contact, ContactEmail } from '../../db/models'
import { toAttendee } from './toAttendee'

const byName = (a, b) => a.name.localeCompare(b.name)

// People who checked in (showed up), alphabetical.
export async function listAttendees(eventId) {
  const rows = await EventParticipant.findAll({
    where: { own_event_id: eventId, checked_in_at: { [Op.ne]: null } },
    include: [{
      model: Contact,
      as: 'contact',
      include: [{ model: ContactEmail, as: 'contact_email' }]
    }]
  })

  return rows.map((r) => toAttendee(r.toJSON())).sort(byName)
}
