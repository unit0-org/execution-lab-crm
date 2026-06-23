import { TextField } from '@/ui/atoms/TextField'

export function CohortPricingFields({ values }) {
  return (
    <>
      <TextField label="Stripe price ID" name="stripe_price_id"
        defaultValue={values.stripe_price_id} />
      <TextField label="Promo code (auto-applied at checkout)"
        name="promo_code" defaultValue={values.promo_code} />
    </>
  )
}
