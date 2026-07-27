export const PAY_IN_FULL = 'full'
export const PAY_ON_PLAN = 'plan'

// Whether the applicant picked the 50/50 plan. Anything else — including a
// form from a cohort that never offered the choice — is pay in full.
export function wantsPaymentPlan(formData) {
  return formData.get('payment_choice') === PAY_ON_PLAN
}
