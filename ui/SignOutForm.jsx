import { InlineForm } from './InlineForm'
import { TextButton } from './TextButton'

// Inline sign-out form that POSTs to /auth/signout.
export function SignOutForm({ children = 'sign out' }) {
  return (
    <InlineForm action="/auth/signout" method="post">
      <TextButton type="submit">{children}</TextButton>
    </InlineForm>
  )
}
