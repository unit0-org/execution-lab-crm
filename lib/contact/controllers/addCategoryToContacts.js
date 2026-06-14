import { ContactCategoryLink } from '@/lib/contact/models'
import { contactIdsInOrg } from './contactIdsInOrg'
import { categoryInOrg } from './categoryInOrg'

// Add one category to many contacts at once; skips pairs already linked.
export async function addCategoryToContacts(contactIds, categoryId) {
  if (!await categoryInOrg(categoryId)) return { count: 0 }

  const ids = await contactIdsInOrg(contactIds)
  const rows = ids.map((contact_id) => ({
    contact_id, category_id: categoryId
  }))

  return ContactCategoryLink.bulkCreate(rows, { ignoreDuplicates: true })
}
