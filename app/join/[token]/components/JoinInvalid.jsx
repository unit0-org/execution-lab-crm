import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { SignOutForm } from '@/ui/molecules/SignOutForm'
import { invalidMessage } from './invalidMessage'

// Shown when an invite link is invalid, used, or for another account.
export function JoinInvalid({ status }) {
  return (
    <Page width="narrow">
      <Stack gap="md">
        <Heading>Invitation unavailable</Heading>
        <Text>{invalidMessage(status)}</Text>
        <SignOutForm>Sign out</SignOutForm>
      </Stack>
    </Page>
  )
}
