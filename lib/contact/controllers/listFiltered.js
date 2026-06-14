import { listContacts } from './list'
import { listContactsByIds } from './listByIds'
import { leadFilterIds } from '@/lib/dashboard/controllers/leadFilterIds'

const FILTERS = new Set(['new', 'active', 'customers'])

// Contacts for a dashboard filter, or all contacts when none applies.
export async function listFilteredContacts(filter) {
  if (!FILTERS.has(filter)) return listContacts()

  const ids = await leadFilterIds(filter)

  return listContactsByIds(ids)
}
