import { Button } from '@/ui/atoms/Button'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

const signOutUrl = `/auth/signout?next=${portalRoutePath('/')}`

// Sign the member out (shared POST route) and return them to the public
// portal rather than the staff login.
export function MemberSignOut() {
  return (
    <form action={signOutUrl} method="post">
      <Button type="submit" size="sm">Sign out</Button>
    </form>
  )
}
