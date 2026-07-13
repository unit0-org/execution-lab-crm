import { InlineForm } from './InlineForm'
import { TextButton } from '../atoms/TextButton'

/**
 * Sign-out form (POSTs to /auth/signout); `next` is the post-logout
 * landing path, defaulting to staff login.
 */
export function SignOutForm({ children = 'sign out', next }) {
  const action = next ? `/auth/signout?next=${next}` : '/auth/signout'

  return (
    <InlineForm action={action} method="post">
      <TextButton type="submit">{children}</TextButton>
    </InlineForm>
  )
}
