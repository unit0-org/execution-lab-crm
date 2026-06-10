import { resolveReferralSource } from './resolveReferralSource'

const FIELDS = [
  'first_name', 'last_name', 'email', 'phone', 'company', 'role'
]

// Collect the register form into a plain object; null if any is blank
// (all fields are required for a paid registration).
export function formToRegistration(formData) {
  const data = {}

  for (const field of FIELDS) {
    const value = (formData.get(field) || '').trim()

    if (!value) return null

    data[field] = value
  }

  data.referral_source = resolveReferralSource(formData)

  if (!data.referral_source) return null

  return data
}
