'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { showToast } from '@/ui/molecules/toastBus'
import { cancelReservationAction } from '../actions/cancelReservation'

// Confirm, then release the seat. The refresh happens last so the row (and
// this menu) don't unmount mid-flight.
export function useCancelReservation(registrationId, onDone) {
  const router = useRouter()
  const [asking, setAsking] = useState(false)
  const [busy, setBusy] = useState(false)

  const finish = () => {
    setBusy(false)
    setAsking(false)
    onDone()
    router.refresh()
  }

  const confirm = () => {
    setBusy(true)
    cancelReservationAction(registrationId)
      .then(() => showToast('Seat released'))
      .catch(() => showToast('Could not release the seat'))
      .finally(finish)
  }

  return { asking, busy, ask: () => setAsking(true), confirm,
    cancel: () => setAsking(false) }
}
