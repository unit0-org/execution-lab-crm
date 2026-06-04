import { Contact, ContactEmail } from '@/lib/db/models'
import { sequelize } from '@/lib/db/sequelize'

// The given contacts (by id), shaped like listContacts, newest first.
export async function listContactsByIds(ids) {
  const rows = await Contact.findAll({
    where: { id: ids },
    include: { model: ContactEmail, as: 'contact_email' },
    order: [[sequelize.col('contact.created_at'), 'DESC']]
  })

  return rows.map((r) => r.toJSON())
}
