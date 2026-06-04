import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { SignOutForm } from '@/ui/molecules/SignOutForm'

// Shown to a signed-in user who isn't a member of any organization.
export function ExclusiveAccess() {
  return (
    <Page>
      <Stack gap="md">
        <Heading>Invite only</Heading>
        <Text>This is a WIP app — access is currently invite-only.</Text>
        <SignOutForm>Sign out</SignOutForm>
      </Stack>
    </Page>
  )
}
