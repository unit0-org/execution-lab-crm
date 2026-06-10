import { Cohort } from '../models'
import { processWaitlist } from '@/lib/waitlist/controllers/processWaitlist'

// Move a cohort between draft, open, and closed. Opening one frees the
// waitlist to advance (Story 3.2), so kick the queue when status is 'open'.
export async function setCohortStatus(organizationId, id, status) {
  await Cohort.update({ status }, {
    where: { id, organization_id: organizationId }
  })

  if (status === 'open') await processWaitlist(organizationId)

  return { ok: true }
}
