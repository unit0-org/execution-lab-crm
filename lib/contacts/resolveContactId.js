import { Contact, ContactEmail, ContactPhone } from '@/lib/db/models'

export async function resolveContactId(g) {
  const found =
    (g.email && await ContactEmail.findContactId(g.email)) ||
    (g.phone && await ContactPhone.findContactId(g.phone))

  if (found) return found

  const c = await Contact.create({
    first_name: g.first_name,
    last_name: g.last_name
  })

  return c.id
}
