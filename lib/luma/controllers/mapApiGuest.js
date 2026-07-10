import { buildApiParticipant } from './apiParticipant'
import { apiAnswers } from './apiAnswers'

function firstNameOf(name) {
  return (name || '').split(' ')[0] || null
}

function lastNameOf(name) {
  return (name || '').split(' ').slice(1).join(' ') || null
}

// Map one Luma API guest object to our internal guest shape, matching
// what mapLumaGuest produces for CSV rows.
export function mapApiGuest(guest) {
  return {
    first_name: guest.user_first_name || firstNameOf(guest.user_name),
    last_name: guest.user_last_name || lastNameOf(guest.user_name),
    email: guest.user_email || null,
    phone: guest.phone_number || null,
    participant: buildApiParticipant(guest),
    answers: apiAnswers(guest)
  }
}
