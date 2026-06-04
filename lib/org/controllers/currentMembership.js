import { createClient } from '@/lib/supabase/server'
import { membershipFor } from './membershipFor'

// The signed-in user's org membership, or null if they aren't a member.
export async function currentMembership() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  const user = data.user

  if (!user) return null

  return membershipFor(user.id, user.email)
}
