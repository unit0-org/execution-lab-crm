import { Company } from '@/lib/company/models'

export async function updateCompany(id, fields) {
  await Company.update(fields, { where: { id } })

  return { ok: true }
}
