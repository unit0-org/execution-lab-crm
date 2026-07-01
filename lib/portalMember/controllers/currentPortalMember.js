import { createClient } from '@/lib/supabase/server'
import { isPortalOwner } from '@/lib/portal/auth/portalOwners'
import { portalMembershipFor } from './membershipFor'
import { ownerMembership } from './ownerMembership'

// The signed-in user's portal membership, or null if they aren't one. A
// portal owner is a member implicitly — no invite row required.
export async function currentPortalMember() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  const user = data.user

  if (!user) return null

  if (isPortalOwner(user.email)) return ownerMembership(user.email)

  return portalMembershipFor(user.id, user.email)
}
