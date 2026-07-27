// Whether this cohort lets a registrant pay in two halves (US-62). Off
// unless an operator turns it on — Fundamentals today.
export const PAYMENT_PLAN_OPTIONS = [
  { value: 'no', label: 'Pay in full only' },
  { value: 'yes', label: 'Offer 50% now / 50% mid-cohort' }
]

export const planOptionValue = (offered) => (offered ? 'yes' : 'no')

export const offersPlanFromForm = (value) => value === 'yes'
