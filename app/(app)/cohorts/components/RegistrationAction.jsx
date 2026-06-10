import { ContactLink } from './ContactLink'
import { RegistrationMenu } from './RegistrationMenu'

// A paid registrant links to their contact; a pending one gets an
// operations menu (e.g. nudge them toward completing payment).
export function RegistrationAction({ registration }) {
  if (registration.status === 'paid') {
    return <ContactLink contactId={registration.contact_id} />
  }

  return <RegistrationMenu registrationId={registration.id} />
}
