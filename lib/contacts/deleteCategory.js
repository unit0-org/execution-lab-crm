import { ContactCategory } from '@/lib/db/models'

// Delete a category; its contact links cascade away (join-table FK).
export function deleteCategory(organizationId, id) {
  return ContactCategory.destroy({
    where: { id, organization_id: organizationId }
  })
}
