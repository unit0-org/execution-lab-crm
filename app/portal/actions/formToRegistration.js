import { splitName } from './splitName'

const REQUIRED = [
  'email', 'linkedin', 'business', 'stage', 'obstacle', 'commitment'
]
const OPTIONAL = ['preferred_name', 'phone', 'website']
const get = (formData, key) => (formData.get(key) || '').trim()

// Collect the register form into a plain object; null if the name or any
// required field is blank (those are required for a paid registration).
export function formToRegistration(formData) {
  const name = splitName(get(formData, 'full_name'))

  if (!name) return null

  const data = { ...name }

  for (const field of REQUIRED) {
    const value = get(formData, field)

    if (!value) return null

    data[field] = value
  }

  for (const field of OPTIONAL) data[field] = get(formData, field)

  return data
}
