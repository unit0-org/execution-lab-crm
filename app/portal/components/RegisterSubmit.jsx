import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FormError } from '@/ui/molecules/FormError'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { SeatHoldNote } from './SeatHoldNote'
import { ctaTone } from './ctaTone'
import { REGISTER_NOTE } from './portalCopy'

// Submit button (tone matches the cohort state) + hold + refund + error.
export function RegisterSubmit({ state, error, holdHours }) {
  return (
    <Stack gap="sm">
      <SeatHoldNote hours={holdHours} />
      <Button tone={ctaTone(state)} type="submit" block>
        Continue to payment →
      </Button>
      <MonoLabel tone="subtle" size={10} align="center">
        {REGISTER_NOTE}
      </MonoLabel>
      <FormError message={error} />
    </Stack>
  )
}
