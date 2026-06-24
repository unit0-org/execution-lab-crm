import { WaitlistEntry } from '../models'

// The active waiting line, oldest first — only entries still waiting or
// invited; accepted/converted/expired have left the line (`active` scope).
export async function listWaitlist() {
  const rows = await WaitlistEntry.scope('active').findAll({
    order: [['created_at', 'ASC']]
  })

  return rows.map((row) => row.toJSON())
}
