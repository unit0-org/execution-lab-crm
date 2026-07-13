import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: someone newly registered for an event.
export function dispatchEventRegistered(contactId) {
  return dispatchTrigger('event_registered', { contactId })
}
