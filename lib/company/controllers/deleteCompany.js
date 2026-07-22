import { Company } from '@/lib/company/models'

// Soft-delete (paranoid) so it can be restored.
export function deleteCompany(id) {
  return Company.destroy({ where: { id } })
}
