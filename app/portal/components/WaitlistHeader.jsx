import { Stack } from '@/ui/layout/Stack'
import { StateTag } from '@/ui/molecules/StateTag'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { WAITLIST_BLURB } from './waitlistCopy'

// Waitlist join title block: status, "Get on the list.", and a blurb.
export function WaitlistHeader() {
  return (
    <Stack gap="sm">
      <StateTag state="waitlist" label="Waitlist" size={12} />
      <Display size="md">Get on the list.</Display>
      <Text tone="muted">{WAITLIST_BLURB}</Text>
    </Stack>
  )
}
