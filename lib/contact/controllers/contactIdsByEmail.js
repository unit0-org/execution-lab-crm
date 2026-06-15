import { Op } from 'sequelize'
import { ContactEmail } from '@/lib/contact/models'

// Contact ids with an email matching the query (case-insensitive).
export async function contactIdsByEmail(query) {
  const rows = await ContactEmail.findAll({
    attributes: ['contact_id'],
    where: { email: { [Op.iLike]: `%${query}%` } }
  })

  return rows.map((row) => row.contact_id)
}
