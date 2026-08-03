import { findHeldReservation } from '@/lib/registration/controllers'

// The id of the still-held reservation this form carries, or null —
// re-validated server-side (the hidden field is the client's word for it)
// so it can skip the full-cohort diversion and, more importantly, so the
// submit lands back on the seat they are already holding.
export async function claimedReservationId(cohortId, formData) {
  const id = (formData.get('reservation') || '').trim()

  if (!id) return null

  const row = await findHeldReservation(cohortId, id)

  return row ? row.id : null
}
