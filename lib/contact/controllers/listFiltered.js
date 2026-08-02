import { listContacts } from './list'
import { listContactsByIds } from './listByIds'
import { intersectIds } from './intersectIds'
import { leadFilterIds } from '@/lib/dashboard/controllers/leadFilterIds'
import { funnelStageContactIds }
  from '@/lib/dashboard/controllers/funnelStageContactIds'
import { scopedEventIds } from '@/lib/event/controllers/scopedEventIds'
import { participantContactIds }
  from '@/lib/event/controllers/participantContactIds'

const FILTERS = new Set(['new', 'active', 'customers'])

const leadIds = (filter) =>
  FILTERS.has(filter) ? leadFilterIds(filter) : null

// Contacts matching the list criteria — a dashboard lead filter, event
// participation (statuses × events), and/or a funnel stage drilled into
// from the dashboard — or all contacts when nothing narrows.
export async function listFilteredContacts(criteria = {}) {
  const { filter, statuses, stage } = criteria
  const events = await scopedEventIds(criteria)
  const byLead = await leadIds(filter)
  const byEvent = await participantContactIds(statuses, events)
  const byStage = await funnelStageContactIds(stage, events)
  const narrowed = intersectIds(intersectIds(byLead, byEvent), byStage)

  if (!narrowed) return listContacts()

  return listContactsByIds(narrowed)
}
