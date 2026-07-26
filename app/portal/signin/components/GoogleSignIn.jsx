import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { signInWithGoogle } from '../actions/signInWithGoogle'

// One-click sign-in for members whose Google address is on their contact.
export function GoogleSignIn() {
  return (
    <form action={signInWithGoogle}>
      <SubmitButton tone="primary" block>Continue with Google</SubmitButton>
    </form>
  )
}
