import { ContactEmail } from '@/lib/contact/models'
import { findContactIdByPhone } from './findContactIdByPhone'

// The contact that already owns this identity — matched on email first,
// then phone. Takes the transaction so it reads inside the caller's
// identity lock, and so it sees that transaction's own writes.
export async function findContactIdByIdentity(identity, transaction) {
  const byEmail = identity.email
    && await ContactEmail.findContactId(identity.email, transaction)

  if (byEmail) return byEmail

  if (!identity.phone) return null

  return findContactIdByPhone(identity.phone, transaction)
}
