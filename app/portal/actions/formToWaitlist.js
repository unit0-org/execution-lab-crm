import { splitName } from './splitName'

const get = (formData, key) => (formData.get(key) || '').trim()

// Collect the waitlist form. Name, email, cohort, business and challenge
// are required (enforced on the inputs); phone is optional. The full name
// splits into first/last for the contact.
export function formToWaitlist(formData) {
  const name = splitName(get(formData, 'full_name')) || {}

  return {
    ...name,
    email: get(formData, 'email'),
    phone: get(formData, 'phone'),
    cohort_id: get(formData, 'cohort_id'),
    business: get(formData, 'business'),
    challenge: get(formData, 'challenge')
  }
}
