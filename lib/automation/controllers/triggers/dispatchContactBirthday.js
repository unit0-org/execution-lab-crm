import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: today is a contact's birthday (fired by the daily cron).
export function dispatchContactBirthday(contactId) {
  return dispatchTrigger('contact_birthday', { contactId })
}
