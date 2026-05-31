import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { signInWithGoogle } from '../actions'

export function SignInForm({ next }) {
  return (
    <form action={signInWithGoogle}>
      <input type="hidden" name="next" value={next} />
      <SubmitButton size="lg" block>Sign in with Google</SubmitButton>
    </form>
  )
}
