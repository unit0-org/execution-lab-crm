import { Contact } from '@/lib/db/models'
import { recordConflict } from './recordConflict'

const fillCrm = (contact, column, value) =>
  Contact.update({ [column]: value }, { where: { id: contact.id } })

// Reconcile one textual scalar field between CRM and Google. `push`
// fills an empty Google side when the account is primary.
export async function mergeScalar(account, person, contact, spec) {
  const crm = (contact[spec.column] || '').trim()
  const google = (person[spec.field] || '').trim()

  if (!crm && !google) return

  if (crm === google) return

  if (!crm) return fillCrm(contact, spec.column, google)

  if (!google) return account.is_primary && spec.push(crm)

  await recordConflict(account, person, spec.field, crm, google)
}
