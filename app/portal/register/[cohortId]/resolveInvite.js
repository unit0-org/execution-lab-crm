import { findInvite } from '@/lib/waitlist/controllers'

// The valid waitlist invite for this register screen, or null. A holder
// claims the freed seat (skips the full check) and gets a prefilled form.
export async function resolveInvite(orgId, cohortId, searchParams) {
  const { invite } = await searchParams

  if (!invite) return null

  const entry = await findInvite(orgId, cohortId, invite)

  if (!entry) return null

  return { token: invite, prefill: entry }
}
