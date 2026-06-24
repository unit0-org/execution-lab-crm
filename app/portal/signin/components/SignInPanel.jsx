import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { GoogleSignIn } from './GoogleSignIn'
import { MagicLinkForm } from './MagicLinkForm'
import { SignInStatus } from './SignInStatus'

// The sign-in card body: intro, status line, and the two sign-in methods.
export function SignInPanel({ status }) {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Heading level={2}>Member sign in</Heading>
        <Text size="sm">Use the email you were invited with.</Text>
      </Stack>
      <SignInStatus status={status} />
      <GoogleSignIn />
      <MagicLinkForm />
    </Stack>
  )
}
