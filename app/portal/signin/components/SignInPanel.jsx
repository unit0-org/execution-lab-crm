import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { ExternalLink } from '@/ui/atoms/ExternalLink'
import { SignInMethods } from './SignInMethods'
import { SignInStatus } from './SignInStatus'

const TALK_URL = 'https://cal.com/abel-osorio/15-min'

// The sign-in card body: intro, status line, the ways in, and a way out.
export function SignInPanel({ status }) {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Heading level={2}>Member sign in</Heading>
        <Text size="sm">Use the email you were invited with.</Text>
      </Stack>
      <SignInStatus status={status} />
      <SignInMethods defaultEmail={status.email} />
      <Text size="sm">
        Not a member of the Lab yet?{' '}
        <ExternalLink href={TALK_URL}>Let’s talk</ExternalLink>
      </Text>
    </Stack>
  )
}
