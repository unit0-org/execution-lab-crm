import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { ExternalLink } from '@/ui/atoms/ExternalLink'
import { MagicLinkForm } from './MagicLinkForm'
import { SignInStatus } from './SignInStatus'

const TALK_URL = 'https://cal.com/abel-osorio/15-min'

// The sign-in card body: intro, status line, and the magic-link form.
export function SignInPanel({ status }) {
  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Heading level={2}>Member sign in</Heading>
        <Text size="sm">Use the email you were invited with.</Text>
      </Stack>
      <SignInStatus status={status} />
      <MagicLinkForm />
      <Text size="sm">
        Not a member of the Lab yet?{' '}
        <ExternalLink href={TALK_URL}>Let’s talk</ExternalLink>
      </Text>
    </Stack>
  )
}
