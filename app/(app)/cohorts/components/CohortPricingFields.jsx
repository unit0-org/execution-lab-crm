import { TextField } from '@/ui/atoms/TextField'

export function CohortPricingFields({ values }) {
  return (
    <>
      <TextField label="Stripe price ID" name="stripe_price_id"
        defaultValue={values.stripe_price_id} />
      <TextField label="Early-bird price ID"
        name="stripe_early_bird_price_id"
        defaultValue={values.stripe_early_bird_price_id} />
      <TextField label="Early-bird deadline" name="early_bird_deadline"
        type="date" defaultValue={values.early_bird_deadline} />
    </>
  )
}
