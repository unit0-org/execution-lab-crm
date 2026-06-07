import { ContactCategory } from '@/lib/db/models'

// Set a category's color (a palette key shown as its pill color).
export function setCategoryColor(id, color) {
  return ContactCategory.update({ color }, { where: { id } })
}
