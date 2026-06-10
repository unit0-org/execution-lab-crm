import { ContactLink } from './ContactLink'
import { NudgeButton } from './NudgeButton'

// A paid registrant links to their contact; a pending one gets a button
// to nudge them toward completing payment.
export function RegistrationAction({ registration }) {
  if (registration.status === 'paid') {
    return <ContactLink contactId={registration.contact_id} />
  }

  return <NudgeButton registrationId={registration.id} />
}
