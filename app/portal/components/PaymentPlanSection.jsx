import { ChipRadios } from '@/ui/molecules/ChipRadios'
import { PAY_IN_FULL } from '../actions/wantsPaymentPlan'
import { planOptions, planHint } from './planCopy'

// How they want to pay. A cohort that doesn't offer the 50/50 plan renders
// nothing here and is billed in full, exactly as before.
export function PaymentPlanSection({ plan }) {
  if (!plan) return null

  return (
    <ChipRadios label="Payment" name="payment_choice" required
      options={planOptions(plan)} value={PAY_IN_FULL}
      hint={planHint(plan)} />
  )
}
