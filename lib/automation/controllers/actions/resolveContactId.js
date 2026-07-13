import { ContactEmail } from '@/lib/contact/models'

// The contact behind a context email, if any.
export function resolveContactId(email) {
  if (!email) return null

  return ContactEmail.findContactId(email)
}
