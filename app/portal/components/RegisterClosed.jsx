import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { ButtonLink } from '@/ui/atoms/ButtonLink'

// Shown when a cohort isn't open for registration.
export function RegisterClosed() {
  return (
    <Stack gap="md">
      <Text tone="muted">This cohort isn&apos;t open for registration.</Text>
      <ButtonLink href="/" tone="primary">Back to cohorts</ButtonLink>
    </Stack>
  )
}
