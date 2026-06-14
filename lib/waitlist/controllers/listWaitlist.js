import { WaitlistEntry } from '../models'

// Everyone on the waitlist, oldest first — the order is the line
// (Story 3.3: who's on it, in position, and whether contacted = status).
export async function listWaitlist() {
  const rows = await WaitlistEntry.findAll({
    order: [['created_at', 'ASC']]
  })

  return rows.map((row) => row.toJSON())
}
