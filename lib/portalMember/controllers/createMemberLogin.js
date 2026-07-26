import { adminAuth } from '@/lib/supabase/adminAuth'

const ALREADY_HAS_LOGIN = /already( been)? registered|already exists/i

const TAKEN =
  'That email already has a login — ask them to sign in once, then set it'

// Mint a login for a member who has never signed in, and link it to them —
// which is what flips an `invited` row to `active` with no email round-trip.
// `email_confirm` skips the confirmation mail on purpose: the whole point of
// setting a password here is that the member never has to click anything.
export async function createMemberLogin(member, email, password) {
  const { data, error } = await adminAuth()
    .createUser({ email, password, email_confirm: true })

  if (ALREADY_HAS_LOGIN.test(error?.message || '')) return { error: TAKEN }

  if (error) return { error: error.message }

  await member.linkUser(data.user.id)

  return { ok: true }
}
