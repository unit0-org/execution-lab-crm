import { Op } from 'sequelize'
import { Company } from '@/lib/company/models'

// Companies whose name matches the query (case-insensitive substring).
// A blank query yields no results.
export async function searchCompanies(query) {
  const trimmed = (query || '').trim()

  if (!trimmed) return []

  const rows = await Company.findAll({
    where: { name: { [Op.iLike]: `%${trimmed}%` } },
    order: [['name', 'ASC']]
  })

  return rows.map((r) => r.toJSON())
}
