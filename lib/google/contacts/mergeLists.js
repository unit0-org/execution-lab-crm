import { pullList } from './pullList'
import { pushList } from './pushList'
import { missingInGoogle } from './missingInGoogle'

// Reconcile emails/phones: pull any Google value into CRM, then (when
// primary) push the union so Google gains CRM-only values.
export async function mergeLists(account, token, contact, person, crm) {
  await pullList(account, contact.id, person)

  if (!account.is_primary) return

  if (!missingInGoogle(crm, person)) return

  await pushList(account, token, contact, person, crm)
}
