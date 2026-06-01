import { ContactEmail } from '@/lib/db/models'

export async function ensureEmail(contactId, email) {
  if (!email) return

  await ContactEmail.findOrCreate({
    where: { email },
    defaults: { contact_id: contactId, email }
  })
}
