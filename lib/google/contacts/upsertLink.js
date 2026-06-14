import { ContactGoogleLink } from '../models/ContactGoogleLink'
import { findLink } from './findLink'

// Create or refresh the link between a CRM contact and a Google person.
export async function upsertLink(account, contactId, person) {
  const existing = await findLink(account.id, person.resourceName)
  const now = new Date()

  if (existing) {
    await existing.update({ etag: person.etag, last_synced_at: now })

    return existing
  }

  return ContactGoogleLink.create({
    contact_id: contactId,
    google_account_id: account.id,
    resource_name: person.resourceName,
    etag: person.etag,
    last_synced_at: now
  })
}
