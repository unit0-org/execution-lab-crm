import { listContacts } from './list'
import { listContactsByIds } from './listByIds'
import { leadFilterIds } from '@/lib/dashboard/controllers/leadFilterIds'

const FILTERS = new Set(['new', 'active', 'customers'])

// Contacts for a dashboard filter, or all contacts when none applies.
export async function listFilteredContacts(organizationId, filter) {
  if (!FILTERS.has(filter)) return listContacts(organizationId)

  const ids = await leadFilterIds(organizationId, filter)

  return listContactsByIds(organizationId, ids)
}
