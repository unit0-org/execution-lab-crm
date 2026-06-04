import { ContactCategory } from '@/lib/db/models'

// All contact categories, alphabetical.
export async function listCategories() {
  const rows = await ContactCategory.findAll({ order: [['name', 'ASC']] })

  return rows.map((row) => row.toJSON())
}
