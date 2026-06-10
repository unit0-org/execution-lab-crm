import { WaitlistEntry } from '../models'
import { sendConfirmation } from './sendConfirmation'

// Add someone to the org's single global waitlist. Joining twice is
// idempotent: the unique (org, email) lets findOrCreate match the
// existing row instead of inserting a duplicate.
export async function joinWaitlist(organizationId, data) {
  const email = (data.email || '').trim()
  const firstName = (data.first_name || '').trim()

  if (!email || !firstName) return { error: 'Name and email are required.' }

  const [, created] = await WaitlistEntry.findOrCreate({
    where: { organization_id: organizationId, email },
    defaults: { ...data, organization_id: organizationId, status: 'waiting' }
  })

  if (created) await sendConfirmation(organizationId, email, firstName)

  return { ok: true }
}
