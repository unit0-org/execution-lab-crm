import { ContactEmail } from '@/lib/contact/models'

// The synthetic membership for a portal owner: no invite row needed. The
// contact id (resolved from their email, null if none) still keys billing
// and account, while isOwner unlocks every cohort's resources and tools.
export async function ownerMembership(email) {
  const contactId = await ContactEmail.findContactId(email)

  return { contactId, status: 'owner', isOwner: true }
}
