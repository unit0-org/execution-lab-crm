import { ContactEmail } from '@/lib/contact/models'
import { normalizeEmail } from './normalizeEmail'

export async function addEmailIfMissing(contactId, rawEmail) {
  const email = normalizeEmail(rawEmail)

  if (!email) return

  await ContactEmail.findOrCreate({
    where: { email },
    defaults: { contact_id: contactId, email }
  })
}
