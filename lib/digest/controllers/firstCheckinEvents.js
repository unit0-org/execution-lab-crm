import { Op } from 'sequelize'
import { EventParticipant, OwnEvent } from '@/lib/event/models'
import { Contact } from '@/lib/contact/models'
import { earliestPerContact } from './earliestPerContact'
import { toAttendee } from './toAttendee'

// For each contact id, resolve their earliest check-in and its event.
export async function firstCheckinEvents(contactIds) {
  if (!contactIds.length) return []

  const rows = await EventParticipant.findAll({
    where: { contact_id: contactIds, checked_in_at: { [Op.ne]: null } },
    include: [
      { model: OwnEvent, attributes: ['title'], required: true },
      { model: Contact, as: 'contact' }
    ],
    order: [['checked_in_at', 'ASC']]
  })

  return earliestPerContact(rows).map(toAttendee)
}
