import { SyncConflict } from '../models/SyncConflict'

// Record a field disagreement unless an unresolved one already exists
// for this (contact, account, field).
export async function recordConflict(account, person, field, crm, google) {
  const open = await SyncConflict.findOne({
    where: {
      contact_id: person.contactId,
      google_account_id: account.id,
      field,
      resolved_at: null
    }
  })

  if (open) return

  await SyncConflict.create({
    organization_id: account.organization_id,
    contact_id: person.contactId,
    google_account_id: account.id,
    resource_name: person.resourceName,
    field,
    crm_value: crm,
    google_value: google
  })
}
