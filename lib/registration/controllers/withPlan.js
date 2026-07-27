import { paymentDashboardUrl } from '@/lib/stripe/paymentDashboardUrl'

const NO_PLAN = {
  plan_due_on: null, plan_settled: false,
  plan_attempts: 0, plan_last_failure: null, plan_stripe_url: null
}

// One registration with its installment flattened onto it for display.
// Settled is derived from the charge id, exactly as the model's scope
// derives it — there is no stored status to disagree with.
export function withPlan(registration, installment) {
  if (!installment) return { ...registration, ...NO_PLAN }

  return {
    ...registration,
    plan_due_on: installment.due_on,
    plan_settled: Boolean(installment.stripe_charge_id),
    plan_attempts: installment.attempt_count,
    plan_last_failure: installment.last_failure,
    plan_stripe_url: paymentDashboardUrl(installment.stripe_charge_id)
  }
}
