import { ContactCategoryLink } from '@/lib/db/models'

// Add one category to many contacts at once; skips pairs already linked.
export function addCategoryToContacts(contactIds, categoryId) {
  const rows = contactIds.map((contact_id) => ({
    contact_id, category_id: categoryId
  }))

  return ContactCategoryLink.bulkCreate(rows, { ignoreDuplicates: true })
}
