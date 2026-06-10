'use server'

import { resolveCheckout } from './resolveCheckout'
import { registerAndCheckout } from './registerAndCheckout'

// Public, org-scoped: validate then register + open Stripe Checkout, or
// divert to the waitlist when the cohort fills.
export async function createCheckoutAction(cohortId, formData) {
  const ctx = await resolveCheckout(cohortId, formData)

  if (!ctx.data) return ctx

  try {
    return await registerAndCheckout(ctx.organizationId, ctx.cohort, ctx.data)
  } catch (e) {
    return { error: e.message }
  }
}
