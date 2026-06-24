import { InlineForm } from './InlineForm'
import { TextButton } from '../atoms/TextButton'

// Inline sign-out form that POSTs to /auth/signout. Pass `next` to choose
// where to land after (e.g. the portal sign-in); defaults to staff login.
export function SignOutForm({ children = 'sign out', next }) {
  const action = next ? `/auth/signout?next=${next}` : '/auth/signout'

  return (
    <InlineForm action={action} method="post">
      <TextButton type="submit">{children}</TextButton>
    </InlineForm>
  )
}
