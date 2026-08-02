import { listContacts } from './list'
import { listContactsByIds } from './listByIds'
import { intersectIds } from './intersectIds'
import { leadFilterIds } from '@/lib/dashboard/controllers/leadFilterIds'
import { participantContactIds }
  from '@/lib/event/controllers/participantContactIds'

const FILTERS = new Set(['new', 'active', 'customers'])

const leadIds = (filter) =>
  FILTERS.has(filter) ? leadFilterIds(filter) : null

// Contacts matching the list criteria — a dashboard lead filter and/or
// event participation (statuses × events) — or all contacts when the
// criteria narrow nothing.
export async function listFilteredContacts(criteria = {}) {
  const { filter, statuses, events } = criteria
  const byLead = await leadIds(filter)
  const byEvent = await participantContactIds(statuses, events)

  if (!byLead && !byEvent) return listContacts()

  return listContactsByIds(intersectIds(byLead, byEvent))
}
