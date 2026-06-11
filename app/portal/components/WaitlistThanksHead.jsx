import { Stack } from '@/ui/layout/Stack'
import { StateTag } from '@/ui/molecules/StateTag'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'

// Confirmation heading: status, "You're on the list.", and a blurb.
export function WaitlistThanksHead({ blurb }) {
  return (
    <Stack gap="sm">
      <StateTag state="waitlist" label="Waitlist" size={12} />
      <Display size="md">You’re on the list.</Display>
      <Text tone="muted">{blurb}</Text>
    </Stack>
  )
}
