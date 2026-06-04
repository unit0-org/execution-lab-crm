import { ContactCategory } from '@/lib/db/models'

// Toggle whether a category's contacts count toward leads.
export function setCategoryLeads(id, includeInLeads) {
  return ContactCategory.update(
    { include_in_leads: includeInLeads },
    { where: { id } }
  )
}
