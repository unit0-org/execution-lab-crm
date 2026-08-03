import { Contact, ContactEmail, ContactPhone } from '@/lib/contact/models'
import { normalizeEmail } from './normalizeEmail'

// Create the person and claim their email/phone in the SAME transaction.
// Claiming later would reopen the race this closes: the identity has to
// be on file the instant the contact becomes visible, or the next caller
// finds a contact it cannot match and makes a second one.
export async function createContactWithIdentity(identity, transaction) {
  const contact = await Contact.create({
    first_name: identity.first_name,
    last_name: identity.last_name
  }, { transaction })

  const email = normalizeEmail(identity.email)

  if (email)
    await ContactEmail.create(
      { contact_id: contact.id, email }, { transaction })

  if (identity.phone)
    await ContactPhone.create(
      { contact_id: contact.id, phone: identity.phone }, { transaction })

  return contact.id
}
