import { RegistrationMenu } from './RegistrationMenu'

// A pending registrant gets an operations menu (nudge them toward
// completing payment); a paid one needs no row action — their name links
// to their contact.
export function RegistrationAction({ registration }) {
  if (registration.status === 'paid') return null

  return <RegistrationMenu registrationId={registration.id} />
}
