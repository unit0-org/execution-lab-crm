import { ContactCategory } from '@/lib/contact/models'
import { createCategory } from './createCategory'

// Find a category by name, or create it. Returns its id.
export async function findOrCreateCategory(name) {
  const found = await ContactCategory.findOne({
    where: { name }
  })

  if (found) return found.id

  const row = await createCategory(name, 'cyan')

  return row.id
}
