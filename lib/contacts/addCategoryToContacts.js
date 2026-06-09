import { ContactCategoryLink } from '@/lib/db/models'
import { contactIdsInOrg } from './contactIdsInOrg'
import { categoryInOrg } from './categoryInOrg'

// Add one category to many contacts at once; skips pairs already linked.
export async function addCategoryToContacts(orgId, contactIds, categoryId) {
  if (!await categoryInOrg(orgId, categoryId)) return { count: 0 }

  const ids = await contactIdsInOrg(orgId, contactIds)
  const rows = ids.map((contact_id) => ({
    contact_id, category_id: categoryId
  }))

  return ContactCategoryLink.bulkCreate(rows, { ignoreDuplicates: true })
}
