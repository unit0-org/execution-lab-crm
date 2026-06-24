import { Form } from '@/ui/molecules/Form'
import { Button } from '@/ui/atoms/Button'
import { signInToPortal } from '../actions/signInToPortal'

// Google sign-in; the server action redirects to Google's consent screen.
export function GoogleSignIn() {
  return (
    <Form action={signInToPortal}>
      <Button type="submit" tone="primary" block>
        Continue with Google
      </Button>
    </Form>
  )
}
