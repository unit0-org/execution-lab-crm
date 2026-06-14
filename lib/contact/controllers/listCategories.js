import { ContactCategory } from '@/lib/contact/models'

// All contact categories, alphabetical.
export async function listCategories(organizationId) {
  const rows = await ContactCategory.findAll({
    where: { organization_id: organizationId },
    order: [['name', 'ASC']]
  })

  return rows.map((row) => row.toJSON())
}
