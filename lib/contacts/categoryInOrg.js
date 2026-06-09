import { ContactCategory } from '@/lib/db/models'

// True when a category id belongs to the given organization.
export async function categoryInOrg(organizationId, categoryId) {
  const row = await ContactCategory.findOne({
    where: { id: categoryId, organization_id: organizationId }
  })

  return Boolean(row)
}
