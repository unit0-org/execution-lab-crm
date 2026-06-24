import { redirect } from 'next/navigation'
import { currentUser } from '@/lib/auth/currentUser'
import { membershipFor } from '@/lib/org/controllers/membershipFor'

// Gate (app) routes to STAFF only. Supabase cookies are shared across
// `.theexecutionlab.ca`, so a signed-in portal member would otherwise
// reach the backoffice — positively require an org membership and bounce
// everyone else to the portal sign-in. Returns the signed-in user.
export async function requireStaff() {
  const user = await currentUser()

  if (!user) redirect('/login')

  const membership = await membershipFor(user.id, user.email)

  if (!membership) redirect('/portal/signin')

  return user
}
