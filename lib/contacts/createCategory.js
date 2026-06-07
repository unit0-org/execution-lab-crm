import { ContactCategory } from '@/lib/db/models'

// Create a category; new ones count as leads by default.
export async function createCategory(name, color) {
  const row = await ContactCategory.create({ name, color })

  return row.toJSON()
}
