import { Contact, ContactEmail, ContactPhone } from '@/lib/db/models'

// Returns { id, created } — created is true only when we made a new contact.
export async function resolveContactId(g) {
  const found =
    (g.email && await ContactEmail.findContactId(g.email)) ||
    (g.phone && await ContactPhone.findContactId(g.phone))

  if (found) return { id: found, created: false }

  const c = await Contact.create({
    first_name: g.first_name,
    last_name: g.last_name
  })

  return { id: c.id, created: true }
}
