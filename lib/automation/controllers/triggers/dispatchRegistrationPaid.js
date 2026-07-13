import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: a registration was paid (a new sale).
export function dispatchRegistrationPaid(email) {
  return dispatchTrigger('registration_paid', { email })
}
