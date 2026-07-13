import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: a brand-new contact was created. The email recipient (if any) is
// resolved from the contact inside the send-email action.
export function dispatchContactCreated(contactId) {
  return dispatchTrigger('contact_created', { contactId })
}
