import { WaitlistEntry } from '../models'
import { cohortBySlug } from '@/lib/cohort/controllers'
import { onWaitlistJoined } from './onWaitlistJoined'

// Add someone to the waitlist for their chosen cohort (picked by slug).
// Idempotent on email. We deliberately don't compute or return the list
// position — exposing it would reveal how short the list is.
export async function joinWaitlist(data) {
  const email = (data.email || '').trim()
  const cohort = await cohortBySlug(data.cohort_id)

  if (!email || !data.first_name || !cohort) {
    return { error: 'Name, email and a valid cohort are required.' }
  }

  const base = { ...data, cohort_id: cohort.id }
  const [entry, created] = await WaitlistEntry.findOrCreate({
    where: { email },
    defaults: { ...base, status: 'waiting' }
  })

  if (created) await onWaitlistJoined(email, data)
  else await entry.update(base)

  return { ok: true, email, start: cohort.start_date,
    capacity: cohort.capacity }
}
