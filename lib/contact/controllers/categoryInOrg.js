import { ContactCategory } from '@/lib/contact/models'

// True when a category id exists.
export async function categoryInOrg(categoryId) {
  const row = await ContactCategory.findOne({
    where: { id: categoryId }
  })

  return Boolean(row)
}
