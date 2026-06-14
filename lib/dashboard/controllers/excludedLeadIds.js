import { Contact } from '@/lib/contact/models'

const allExcluded = (categories) =>
  categories.every((c) => !c.include_in_leads)

// Ids of contacts excluded from leads: those with >=1 category where
// EVERY category is flagged include_in_leads = false. A contact with no
// categories stays a lead (the default).
export async function excludedLeadIds() {
  const rows = await Contact.findAll({
    attributes: ['id'],
    include: [{
      association: 'categories',
      attributes: ['include_in_leads'],
      through: { attributes: [] },
      required: true
    }]
  })
  const excluded = rows.filter((r) => allExcluded(r.categories))

  return new Set(excluded.map((r) => r.id))
}
