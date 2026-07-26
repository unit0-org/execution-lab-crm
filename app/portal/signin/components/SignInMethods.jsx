import { Stack } from '@/ui/layout/Stack'
import { Divider } from '@/ui/atoms/Divider'
import { GoogleSignIn } from './GoogleSignIn'
import { EmailSignInForm } from './EmailSignInForm'

// Two ways in: one click with Google, or the email you were invited with —
// with a password if you have one, a one-time link if you don't.
export function SignInMethods({ defaultEmail }) {
  return (
    <Stack gap="md">
      <GoogleSignIn />
      <Divider />
      <EmailSignInForm defaultEmail={defaultEmail} />
    </Stack>
  )
}
