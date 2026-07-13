import { ContactEmail } from '@/lib/contact/models'

// The first known email for a contact, if any.
export async function resolveEmail(contactId) {
  if (!contactId) return null

  const row = await ContactEmail.findOne({
    where: { contact_id: contactId }
  })

  return row ? row.email : null
}
