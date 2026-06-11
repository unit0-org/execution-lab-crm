import { WaitlistEntry } from '../models'
import { Cohort } from '@/lib/cohort/models'
import { sendConfirmation } from './sendConfirmation'
import { waitlistStanding } from './waitlistStanding'

// Add someone to the org waitlist for their chosen cohort. Idempotent on
// (org, email): a repeat join updates the existing row. Returns their
// standing (position + wave) for the confirmation.
export async function joinWaitlist(organizationId, data) {
  const email = (data.email || '').trim()

  if (!email || !data.first_name || !data.cohort_id) {
    return { error: 'Name, email and cohort are required.' }
  }

  const [entry, created] = await WaitlistEntry.findOrCreate({
    where: { organization_id: organizationId, email },
    defaults: { ...data, organization_id: organizationId, status: 'waiting' }
  })

  if (created) await sendConfirmation(organizationId, email, data.first_name)
  else await entry.update(data)

  const standing = await waitlistStanding(organizationId, entry)
  const cohort = await Cohort.findByPk(entry.cohort_id)

  return { ok: true, email, start: cohort?.start_date, ...standing }
}
