import { getContact } from '@/lib/contact/controllers/get'

// The address a member signs in with: their contact's first email. Emails
// live on the contact, never on portal_member, so this has to go and look.
export async function memberSignInEmail(contactId) {
  const contact = await getContact(contactId)

  return contact?.contact_email?.[0]?.email || null
}
