import { ContactCategory } from '@/lib/db/models'

// Set a category's color (a palette key shown as its pill color).
export function setCategoryColor(organizationId, id, color) {
  return ContactCategory.update(
    { color },
    { where: { id, organization_id: organizationId } }
  )
}
