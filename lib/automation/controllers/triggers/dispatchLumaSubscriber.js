import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: a brand-new contact arrived via a Luma event (a new subscriber).
export function dispatchLumaSubscriber(contactId) {
  return dispatchTrigger('luma_subscriber', { contactId })
}
