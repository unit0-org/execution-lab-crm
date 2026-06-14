import { Contact, ContactEmail } from '@/lib/contact/models'

const toName = (c) => ({
  id: c.id,
  name: c.full_name || 'Unknown',
  email: c.contact_email?.[0]?.email || null
})

// Map of contact id → { name, email } for the given contact ids.
export async function loadContactNames(ids) {
  const rows = await Contact.findAll({
    where: { id: ids },
    include: { model: ContactEmail, as: 'contact_email' }
  })

  return new Map(rows.map((r) => [r.id, toName(r.toJSON())]))
}
