const TEXT_FIELDS = [
  'label', 'start_date', 'description', 'stripe_price_id',
  'stripe_early_bird_price_id', 'early_bird_deadline'
]

// Collect the cohort form fields into a plain object, coercing capacity
// to a number.
export function formToCohort(formData) {
  const data = {}

  for (const field of TEXT_FIELDS) {
    data[field] = formData.get(field) || null
  }

  data.capacity = Number(formData.get('capacity')) || null

  return data
}
