const TEXT_FIELDS = [
  'label', 'start_date', 'description', 'stripe_price_id', 'promo_code'
]

const WINDOW_FIELDS = ['registration_opens_at', 'registration_closes_at']

// Collect the cohort form fields into a plain object, coercing capacity to
// a number. Registration-window dates are only included when filled, so a
// blank one falls back to the rule default instead of overriding it.
export function formToCohort(formData) {
  const data = {}

  for (const field of TEXT_FIELDS) data[field] = formData.get(field) || null

  for (const field of WINDOW_FIELDS) addIfFilled(data, formData, field)

  data.capacity = Number(formData.get('capacity')) || null

  return data
}

function addIfFilled(data, formData, field) {
  const value = formData.get(field)

  if (value) data[field] = value
}
