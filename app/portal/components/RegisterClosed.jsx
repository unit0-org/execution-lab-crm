import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { ButtonLink } from '@/ui/atoms/ButtonLink'

// Shown when a cohort isn't open for registration.
export function RegisterClosed() {
  return (
    <Stack gap="md">
      <Display size="md">Registration closed.</Display>
      <Text tone="muted">
        This cohort isn’t open for registration right now.
      </Text>
      <ButtonLink href="/" tone="primary">Back to cohorts</ButtonLink>
    </Stack>
  )
}
