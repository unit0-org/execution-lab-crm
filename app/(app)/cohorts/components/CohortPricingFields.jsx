import { TextField } from '@/ui/atoms/TextField'
import { Select } from '@/ui/atoms/Select'
import { PAYMENT_PLAN_OPTIONS, planOptionValue } from './paymentPlanOptions'

export function CohortPricingFields({ values }) {
  return (
    <>
      <TextField label="Stripe price ID" name="stripe_price_id"
        defaultValue={values.stripe_price_id} />
      <TextField label="Promo code (auto-applied at checkout)"
        name="promo_code" defaultValue={values.promo_code} />
      <Select label="Payment plan" name="offers_payment_plan"
        defaultValue={planOptionValue(values.offers_payment_plan)}
        options={PAYMENT_PLAN_OPTIONS} />
    </>
  )
}
