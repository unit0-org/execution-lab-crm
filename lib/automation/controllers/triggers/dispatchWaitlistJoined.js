import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: a new person joined the cohort waitlist (email only — they may
// not have a contact record yet).
export function dispatchWaitlistJoined(email) {
  return dispatchTrigger('waitlist_joined', { email })
}
