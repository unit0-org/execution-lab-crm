import { Text } from '@/ui/atoms/Text'

// One-line sign-in feedback: an error, a "link sent" confirmation, or none.
export function SignInStatus({ status }) {
  if (status.error)
    return <Text size="sm">Sign-in failed: {status.error}</Text>

  if (status.sent)
    return <Text size="sm">Check your email for a sign-in link.</Text>

  return null
}
