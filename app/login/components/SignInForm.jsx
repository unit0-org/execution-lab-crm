import { Button } from '@/ui/Button'
import { signInWithGoogle } from '../actions'

export function SignInForm({ next }) {
  return (
    <form action={signInWithGoogle}>
      <input type="hidden" name="next" value={next} />
      <Button type="submit" size="lg" block>Sign in with Google</Button>
    </form>
  )
}
