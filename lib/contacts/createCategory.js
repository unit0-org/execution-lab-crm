import { ContactCategory } from '@/lib/db/models'

// Create a category; new ones count as leads by default.
export async function createCategory(organizationId, name, color) {
  const row = await ContactCategory.create({
    organization_id: organizationId,
    name,
    color
  })

  return row.toJSON()
}
