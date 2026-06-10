import { WaitlistEntry } from '../models'

// The oldest still-waiting entry — the front of the line, or null.
export function nextWaitingEntry(organizationId) {
  return WaitlistEntry.findOne({
    where: { organization_id: organizationId, status: 'waiting' },
    order: [['created_at', 'ASC']]
  })
}
