import { WaitlistEntry } from '../models'

// Everyone on the org's waitlist, oldest first — the order is the line
// (Story 3.3: who's on it, in position, and whether contacted = status).
export async function listWaitlist(organizationId) {
  const rows = await WaitlistEntry.findAll({
    where: { organization_id: organizationId },
    order: [['created_at', 'ASC']]
  })

  return rows.map((row) => row.toJSON())
}
