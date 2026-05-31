import { Contact, ContactEmail } from '@/lib/db/models'

export async function listContacts() {
  const rows = await Contact.findAll({
    include: { model: ContactEmail, as: 'contact_email' },
    order: [['created_at', 'DESC']]
  })

  return rows.map((r) => r.toJSON())
}
