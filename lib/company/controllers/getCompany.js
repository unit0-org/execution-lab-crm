import { Company } from '@/lib/company/models'

export async function getCompany(id) {
  const row = await Company.findOne({ where: { id } })

  if (!row) return null

  return row.toJSON()
}
