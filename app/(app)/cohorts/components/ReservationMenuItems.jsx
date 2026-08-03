'use client'

import { CancelReservationMenuItem } from './CancelReservationMenuItem'

// The operations that only make sense on a staff-reserved seat. Nothing
// on an ordinary registration, which has no reservation to release.
export function ReservationMenuItems({ registration, onDone }) {
  if (!registration.reserved_at) return null

  return <CancelReservationMenuItem registrationId={registration.id}
    onDone={onDone} />
}
