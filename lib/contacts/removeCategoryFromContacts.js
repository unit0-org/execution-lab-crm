import { ContactCategoryLink } from '@/lib/db/models'

// Remove one category from many contacts at once.
export function removeCategoryFromContacts(contactIds, categoryId) {
  return ContactCategoryLink.destroy({
    where: { contact_id: contactIds, category_id: categoryId }
  })
}
