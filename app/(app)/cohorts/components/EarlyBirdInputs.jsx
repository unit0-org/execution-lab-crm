import { TextField } from '@/ui/atoms/TextField'

// The early-bird price ID + deadline, rendered only when enabled.
export function EarlyBirdInputs({ enabled, values }) {
  if (!enabled) return null

  return (
    <>
      <TextField label="Early-bird price ID"
        name="stripe_early_bird_price_id"
        defaultValue={values.stripe_early_bird_price_id} />
      <TextField label="Early-bird deadline" name="early_bird_deadline"
        type="date" defaultValue={values.early_bird_deadline} />
    </>
  )
}
