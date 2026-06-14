import { ContactCategoryLink } from '@/lib/contact/models'
import { contactIdsInOrg } from './contactIdsInOrg'
import { categoryInOrg } from './categoryInOrg'

// Remove one category from many contacts at once.
export async function removeCategoryFromContacts(contactIds, catId) {
  if (!await categoryInOrg(catId)) return 0

  const ids = await contactIdsInOrg(contactIds)

  return ContactCategoryLink.destroy({
    where: { contact_id: ids, category_id: catId }
  })
}
