import { SyncConflict } from '../models/SyncConflict'

// Record a field disagreement unless an unresolved one already exists
// for this (contact, account, field).
export async function recordConflict(account, person, field, crm, google) {
  const open = await SyncConflict.scope('unresolved').findOne({
    where: {
      contact_id: person.contactId,
      google_account_id: account.id,
      field
    }
  })

  if (open) return

  await SyncConflict.create({
    contact_id: person.contactId,
    google_account_id: account.id,
    resource_name: person.resourceName,
    field,
    crm_value: crm,
    google_value: google
  })
}
