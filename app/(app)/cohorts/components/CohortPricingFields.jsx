import { TextField } from '@/ui/atoms/TextField'
import { CohortEarlyBird } from './CohortEarlyBird'

export function CohortPricingFields({ values }) {
  return (
    <>
      <TextField label="Stripe price ID" name="stripe_price_id"
        defaultValue={values.stripe_price_id} />
      <CohortEarlyBird values={values} />
    </>
  )
}
