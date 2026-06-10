import { findInvite } from '@/lib/waitlist/controllers'

// Whether the form carries a still-valid waitlist invite for this cohort —
// re-validated server-side so it can skip the full-cohort diversion (3.2).
export async function hasValidInvite(organizationId, cohortId, formData) {
  const token = (formData.get('invite') || '').trim()

  if (!token) return false

  return Boolean(await findInvite(organizationId, cohortId, token))
}
