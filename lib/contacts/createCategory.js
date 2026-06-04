import { ContactCategory } from '@/lib/db/models'

// Create a category; new ones count as leads by default.
export async function createCategory(name) {
  const row = await ContactCategory.create({ name })

  return row.toJSON()
}
