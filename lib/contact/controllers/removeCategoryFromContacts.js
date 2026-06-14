import { ContactCategoryLink } from '@/lib/contact/models'
import { contactIdsInOrg } from './contactIdsInOrg'
import { categoryInOrg } from './categoryInOrg'

// Remove one category from many contacts at once.
export async function removeCategoryFromContacts(orgId, contactIds, catId) {
  if (!await categoryInOrg(orgId, catId)) return 0

  const ids = await contactIdsInOrg(orgId, contactIds)

  return ContactCategoryLink.destroy({
    where: { contact_id: ids, category_id: catId }
  })
}
