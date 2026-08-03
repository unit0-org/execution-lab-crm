'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { useReserveFlow } from '../hooks/useReserveFlow'
import { ReserveStep } from './ReserveStep'

// Reserve a seat for someone: who it is for, then the email they get.
export function ReserveSeatModal({ open, onClose, cohortId, contacts }) {
  const flow = useReserveFlow(cohortId, onClose)

  return (
    <TitledModal open={open} title="Reserve a seat" onClose={onClose} wide>
      <ReserveStep flow={flow} contacts={contacts} onCancel={onClose} />
    </TitledModal>
  )
}
