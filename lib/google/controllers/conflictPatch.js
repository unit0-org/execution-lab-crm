import { parseBirthday } from './parseBirthday'

// Map a resolved conflict's field + google value to the CRM Contact
// columns to write when Google wins.
export function conflictPatch(field, value) {
  if (field === 'birthday') return parseBirthday(value)

  return { [field]: value }
}
