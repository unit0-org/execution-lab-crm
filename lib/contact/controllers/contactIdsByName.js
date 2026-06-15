import { Op } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'
import { Contact } from '@/lib/contact/models'

const fullName = sequelize.fn(
  'concat_ws', ' ',
  sequelize.col('first_name'), sequelize.col('last_name')
)

// Contact ids whose full name matches the query (case-insensitive).
export async function contactIdsByName(query) {
  const rows = await Contact.findAll({
    attributes: ['id'],
    where: sequelize.where(fullName, { [Op.iLike]: `%${query}%` })
  })

  return rows.map((row) => row.id)
}
