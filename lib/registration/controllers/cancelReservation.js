import { Registration } from '@/lib/registration/models'

// Release a reserved seat now rather than waiting out its hold. The row
// stays — who was reserved, and that it was cancelled, is history worth
// keeping — but 'cancelled' matches neither branch of the confirmed scope,
// so the seat frees up everywhere the instant this lands. Only a seat that
// is still pending can be cancelled; a paid one is a real registration.
export async function cancelReservation(registrationId) {
  const row = await Registration.findByPk(registrationId)

  if (!row || row.status !== 'pending') return { skipped: true }

  await row.update({ status: 'cancelled' })

  return { cancelled: true }
}
