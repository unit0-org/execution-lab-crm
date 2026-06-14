import { ContactCategory } from '@/lib/contact/models'
import { createCategory } from './createCategory'

// Find a category by name within an org, or create it. Returns its id.
export async function findOrCreateCategory(organizationId, name) {
  const found = await ContactCategory.findOne({
    where: { organization_id: organizationId, name }
  })

  if (found) return found.id

  const row = await createCategory(organizationId, name, 'cyan')

  return row.id
}
