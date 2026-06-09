import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { SignOutForm } from '@/ui/molecules/SignOutForm'

// A full 403 screen for a signed-in user who lacks access to a page.
export function Forbidden({ message = 'You don’t have access to this.' }) {
  return (
    <Page width="narrow">
      <Stack gap="md">
        <Heading>403 — Forbidden</Heading>
        <Text tone="muted">{message}</Text>
        <SignOutForm>Sign out</SignOutForm>
      </Stack>
    </Page>
  )
}
