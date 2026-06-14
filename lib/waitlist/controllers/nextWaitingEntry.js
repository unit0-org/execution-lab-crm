import { WaitlistEntry } from '../models'

// The oldest still-waiting entry — the front of the line, or null.
export function nextWaitingEntry() {
  return WaitlistEntry.findOne({
    where: { status: 'waiting' },
    order: [['created_at', 'ASC']]
  })
}
