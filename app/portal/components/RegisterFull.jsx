import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { ButtonLink } from '@/ui/atoms/ButtonLink'

// Shown when a cohort filled before the applicant could pay.
export function RegisterFull() {
  return (
    <Stack gap="md">
      <Text tone="muted">This cohort is full.</Text>
      <ButtonLink href="/waitlist" tone="primary">Join Waitlist</ButtonLink>
    </Stack>
  )
}
