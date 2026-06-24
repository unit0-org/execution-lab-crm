import { redirect } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { currentPortalMember } from '@/lib/portalMember/controllers'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { MemberHeader } from './components/MemberHeader'

// Gate the member area: only an active portal member may enter. Everyone
// else (no session, not invited, revoked) is sent to the portal sign-in.
export async function MemberShellServer({ children }) {
  const member = await currentPortalMember()

  if (!member || member.status === 'revoked')
    redirect(portalRoutePath('/signin'))

  return (
    <Stack gap="lg">
      <MemberHeader />
      {children}
    </Stack>
  )
}
