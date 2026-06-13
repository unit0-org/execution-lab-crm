import { Registration } from '../models'
import { toRegistrationEntry } from './toRegistrationEntry'

// A contact's cohort registrations as activity entries.
export async function registrationEntries(contactId) {
  const rows = await Registration.findAll({
    where: { contact_id: contactId },
    include: [{ association: 'cohort' }],
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toRegistrationEntry(row.toJSON()))
}
