import { Inline } from '@/ui/layout/Inline'
import { Link } from '@/ui/atoms/Link'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { MemberSignOut } from './MemberSignOut'

// Member masthead: brand, a link to the public cohort registration, and
// sign-out — the signed-in counterpart to the registration site header.
export function MemberHeader() {
  return (
    <Inline gap="md">
      <MonoLabel size={11}>The Execution Lab · Members</MonoLabel>
      <Link href={portalRoutePath('/')}>Cohort registration</Link>
      <MemberSignOut />
    </Inline>
  )
}
