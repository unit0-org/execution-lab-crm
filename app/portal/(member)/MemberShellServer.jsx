import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { currentPortalMember } from '@/lib/portalMember/controllers'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { MemberFrame } from './components/MemberFrame'

// Gate the member area: only an active portal member may enter. Everyone
// else (no session, not invited, revoked) goes to the portal sign-in.
export async function MemberShellServer({ children }) {
  const member = await currentPortalMember()

  if (!member || member.status === 'revoked')
    redirect(portalRoutePath('/signin'))

  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  return <MemberFrame email={data.user?.email}>{children}</MemberFrame>
}
