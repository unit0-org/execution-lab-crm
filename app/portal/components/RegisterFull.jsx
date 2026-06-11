import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { ButtonLink } from '@/ui/atoms/ButtonLink'

// Shown when a cohort filled before the applicant could pay.
export function RegisterFull() {
  return (
    <Stack gap="md">
      <Display size="md">This cohort is full.</Display>
      <Text tone="muted">
        Join the waitlist and we’ll notify you the moment a seat opens.
      </Text>
      <ButtonLink href="/waitlist" tone="waitlist">Join waitlist</ButtonLink>
    </Stack>
  )
}
