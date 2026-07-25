import { adminAuth } from '@/lib/supabase/adminAuth'
import { createMemberLogin } from './createMemberLogin'

// Replace the password on the member's existing login, or mint one when they
// have never signed in. An existing password is only ever replaced — there is
// no way to read one back.
export async function applyMemberPassword(member, email, password) {
  if (!member.user_id) return createMemberLogin(member, email, password)

  const { error } = await adminAuth()
    .updateUserById(member.user_id, { password })

  return error ? { error: error.message } : { ok: true }
}
