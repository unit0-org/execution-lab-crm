import { resolvePlanChargeDate } from '@/lib/cohort/controllers'
import { splitInHalf } from './splitInHalf'

const offersPlan = (cohort, pricing) =>
  cohort.offers_payment_plan && cohort.start_date && pricing.amountCents

// The 50/50 plan as the portal states it: what is taken today, what is
// taken later, and the day it is taken. Null for a cohort that doesn't
// offer the plan — the register form then shows no choice at all.
export function cohortPlanTerms(cohort, pricing) {
  if (!offersPlan(cohort, pricing)) return null

  return {
    ...splitInHalf(pricing.amountCents),
    chargeDate: resolvePlanChargeDate(cohort.start_date)
  }
}
