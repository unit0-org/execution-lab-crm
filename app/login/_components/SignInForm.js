import { signInWithGoogle } from '../_actions'
import { button } from '../_styles'

export function SignInForm({ next }) {
  return (
    <form action={signInWithGoogle}>
      <input type="hidden" name="next" value={next} />
      <button type="submit" style={button}>Sign in with Google</button>
    </form>
  )
}
