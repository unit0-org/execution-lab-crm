import { WaitlistEntry } from '../models'
import { cohortBySlug } from '@/lib/cohort/controllers'
import { sendConfirmation } from './sendConfirmation'
import { waitlistStanding } from './waitlistStanding'

// Add someone to the org waitlist for their chosen cohort (picked by
// slug). Idempotent on (org, email); returns standing for the confirmation.
export async function joinWaitlist(organizationId, data) {
  const email = (data.email || '').trim()
  const cohort = await cohortBySlug(data.cohort_id)

  if (!email || !data.first_name || !cohort) {
    return { error: 'Name, email and a valid cohort are required.' }
  }

  const base = { ...data, organization_id: organizationId,
    cohort_id: cohort.id }
  const [entry, created] = await WaitlistEntry.findOrCreate({
    where: { organization_id: organizationId, email },
    defaults: { ...base, status: 'waiting' }
  })

  if (created) await sendConfirmation(organizationId, email, data.first_name)
  else await entry.update(base)

  const standing = await waitlistStanding(organizationId, entry)

  return { ok: true, email, start: cohort.start_date, ...standing }
}
