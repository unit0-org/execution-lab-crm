const FIELDS = [
  'first_name', 'last_name', 'email', 'phone', 'company',
  'role', 'referral_source'
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

  return data
}
