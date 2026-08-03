'use client'

import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useCancelReservation } from '../hooks/useCancelReservation'

// Release a reserved seat now instead of waiting out its hold. Confirmed
// first — it hands someone's place to the next person.
export function CancelReservationMenuItem({ registrationId, onDone }) {
  const flow = useCancelReservation(registrationId, onDone)

  return (
    <>
      <MenuRow leading={<Icon name="close" size={16} />}
        label="Release reserved seat" onClick={flow.ask} />
      <ConfirmDialog open={flow.asking} title="Release this seat?"
        message="The seat frees up immediately and they lose their place."
        confirmLabel="Release seat" busy={flow.busy}
        onConfirm={flow.confirm} onCancel={flow.cancel} />
    </>
  )
}
