import { Contact, ContactEmail } from '@/lib/db/models'
import { findContactIdByPhone } from './findContactIdByPhone'

// Returns { id, created } — created is true only when we made a new contact.
export async function resolveContactId(organizationId, g) {
  const found =
    (g.email && await ContactEmail.findContactId(organizationId, g.email)) ||
    (g.phone && await findContactIdByPhone(organizationId, g.phone))

  if (found) return { id: found, created: false }

  const c = await Contact.create({
    organization_id: organizationId,
    first_name: g.first_name,
    last_name: g.last_name
  })

  return { id: c.id, created: true }
}
