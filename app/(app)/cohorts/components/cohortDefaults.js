const EMPTY = {
  label: '', start_date: '', capacity: '', description: '',
  registration_opens_at: '', registration_closes_at: '',
  stripe_price_id: '', promo_code: '', offers_payment_plan: false
}

// Form default values for a cohort, falling back to blanks when creating.
export function cohortDefaults(cohort) {
  return { ...EMPTY, ...(cohort || {}) }
}
