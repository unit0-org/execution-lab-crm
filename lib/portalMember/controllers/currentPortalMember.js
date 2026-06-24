import { createClient } from '@/lib/supabase/server'
import { portalMembershipFor } from './membershipFor'

// The signed-in user's portal membership, or null if they aren't one.
export async function currentPortalMember() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  const user = data.user

  if (!user) return null

  return portalMembershipFor(user.id, user.email)
}
