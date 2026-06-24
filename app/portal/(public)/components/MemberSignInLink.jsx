import { Inline } from '@/ui/layout/Inline'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MonoLink } from '@/ui/atoms/MonoLink'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// "Lab member? Sign in" — sends an existing member from the public
// registration site to the member sign-in (same tab).
export function MemberSignInLink() {
  return (
    <Inline gap="xs">
      <MonoLabel size={11}>Lab member?</MonoLabel>
      <MonoLink href={portalRoutePath('/signin')} external={false} underline>
        Sign in →
      </MonoLink>
    </Inline>
  )
}
