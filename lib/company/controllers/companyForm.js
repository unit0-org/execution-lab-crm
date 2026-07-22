const FIELDS = [
  'name', 'legal_name', 'address', 'business_number',
  'invoice_email', 'website'
]

// Whitelist the company form fields into a plain object (blank -> null).
export function readCompanyForm(formData) {
  const data = {}

  for (const field of FIELDS) data[field] = formData.get(field) || null

  return data
}
