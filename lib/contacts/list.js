import { Contact, ContactEmail, ContactCategory } from '@/lib/db/models'
import { sequelize } from '@/lib/db/sequelize'

export async function listContacts() {
  const rows = await Contact.findAll({
    include: [
      { model: ContactEmail, as: 'contact_email' },
      { model: ContactCategory, as: 'categories' }
    ],
    order: [[sequelize.col('contact.created_at'), 'DESC']]
  })

  return rows.map((r) => r.toJSON())
}
