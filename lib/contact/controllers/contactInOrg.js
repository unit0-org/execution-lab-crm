import { Contact } from '@/lib/contact/models'

// True when a contact id belongs to the given organization. Used to
// org-scope child writes keyed by contact id (phone, fact, note).
export async function contactInOrg(organizationId, contactId) {
  const row = await Contact.findOne({
    where: { id: contactId, organization_id: organizationId }
  })

  return Boolean(row)
}
