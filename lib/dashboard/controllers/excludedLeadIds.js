import { Contact } from '@/lib/db/models'

// Ids of contacts whose category is excluded from lead calculations.
export async function excludedLeadIds() {
  const rows = await Contact.findAll({
    attributes: ['id'],
    include: [{
      association: 'category',
      where: { include_in_leads: false }
    }]
  })

  return new Set(rows.map((row) => row.id))
}
