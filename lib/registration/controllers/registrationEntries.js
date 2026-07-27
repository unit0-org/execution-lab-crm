import { Registration } from '../models'
import { toRegistrationEntry } from './toRegistrationEntry'
import { attachPlanInstallments } from './attachPlanInstallments'

// A contact's cohort registrations as activity entries, each knowing
// whether it still owes the second half of a payment plan.
export async function registrationEntries(contactId) {
  const rows = await Registration.findAll({
    where: { contact_id: contactId },
    include: [{ association: 'cohort' }],
    order: [['created_at', 'DESC']]
  })
  const seats = await attachPlanInstallments(rows.map((row) => row.toJSON()))

  return seats.map(toRegistrationEntry)
}
