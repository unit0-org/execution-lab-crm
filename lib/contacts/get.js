import { Contact, ContactEmail } from '@/lib/db/models'

export async function getContact(id) {
  const row = await Contact.findByPk(id, {
    include: [
      { model: ContactEmail, as: 'contact_email' },
      { association: 'category' }
    ]
  })

  if (!row) return null

  return row.toJSON()
}
