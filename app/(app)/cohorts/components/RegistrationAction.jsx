import { ActionSlot } from './ActionSlot'
import { RegistrationMenu } from './RegistrationMenu'

// A pending registrant gets an operations menu (nudge them toward
// completing payment, release a seat we reserved); a paid or cancelled one
// needs none. Every row reserves the same control height via ActionSlot so
// the rows stay the same height.
export function RegistrationAction({ registration }) {
  if (registration.status !== 'pending') return <ActionSlot />

  return (
    <ActionSlot>
      <RegistrationMenu registration={registration} />
    </ActionSlot>
  )
}
