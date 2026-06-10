import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { greetingText, emailNote } from './confirmationText'

// On-screen confirmation after a successful payment (Story 2.4).
export function Confirmation({ name, email }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={1} gutter="none">You&apos;re registered!</Heading>
        <Text tone="muted">{greetingText(name)}</Text>
        <Text tone="muted">{emailNote(email)}</Text>
        <ButtonLink href="/" tone="primary">Back to cohorts</ButtonLink>
      </Stack>
    </Card>
  )
}
