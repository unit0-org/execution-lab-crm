import { Inline } from '@/ui/layout/Inline'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MonoLink } from '@/ui/atoms/MonoLink'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// "Lab member? Sign in" — sends an existing member from the public
// registration site straight to their account (same tab). A member who
// still has a session skips the sign-in page entirely; everyone else is
// bounced to /signin by the member gate, and lands back here after.
export function MemberSignInLink() {
  return (
    <Inline gap="xs">
      <MonoLabel size={11}>Lab member?</MonoLabel>
      <MonoLink href={portalRoutePath('/account')} external={false} underline>
        Sign in →
      </MonoLink>
    </Inline>
  )
}
