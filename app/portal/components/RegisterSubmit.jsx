import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FormError } from '@/ui/molecules/FormError'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { ctaTone } from './ctaTone'
import { REGISTER_NOTE } from './portalCopy'

// Submit button (tone matches the cohort state) + refund note + error.
export function RegisterSubmit({ state, error }) {
  return (
    <Stack gap="sm">
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
