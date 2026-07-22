const FIELDS = [
  'legal_name', 'email', 'phone', 'tax_id', 'address_line1',
  'address_line2', 'city', 'region', 'postal_code', 'country'
]

// Collect the organization-profile form fields into a plain object.
export function formToOrganization(formData) {
  const data = {}

  for (const field of FIELDS) {
    data[field] = formData.get(field) || null
  }

  return data
}
