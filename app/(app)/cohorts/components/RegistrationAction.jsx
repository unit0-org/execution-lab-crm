import { ActionSlot } from './ActionSlot'
import { RegistrationMenu } from './RegistrationMenu'

// A pending registrant gets an operations menu (nudge them toward
// completing payment); a paid one needs none. Every row reserves the same
// control height via ActionSlot so the rows stay the same height.
export function RegistrationAction({ registration }) {
  if (registration.status === 'paid') return <ActionSlot />

  return (
    <ActionSlot>
      <RegistrationMenu registrationId={registration.id} />
    </ActionSlot>
  )
}
