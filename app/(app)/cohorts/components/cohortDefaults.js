const EMPTY = {
  label: '', start_date: '', capacity: '', description: '',
  stripe_price_id: '', stripe_early_bird_price_id: '',
  early_bird_deadline: '', promo_code: ''
}

// Form default values for a cohort, falling back to blanks when creating.
export function cohortDefaults(cohort) {
  return { ...EMPTY, ...(cohort || {}) }
}
