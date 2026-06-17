import { Op, fn, col, where as sqlWhere } from 'sequelize'
import { Contact } from '@/lib/contact/models'

// Contact id for an exact full-name match (case-insensitive), or null.
export async function findContactIdByName(name, t) {
  const value = name && name.trim()

  if (!value) return null

  const fullName = fn('concat_ws', ' ', col('first_name'), col('last_name'))
  const row = await Contact.findOne({
    where: sqlWhere(fullName, { [Op.iLike]: value }), transaction: t
  })

  return row ? row.id : null
}
