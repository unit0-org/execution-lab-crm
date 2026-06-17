import { ContactEmail } from '@/lib/contact/models'
import { normalizeEmail } from '@/lib/contact/controllers/normalizeEmail'

// Add each email not already present; returns how many were added.
export async function addEmailsTx(contactId, emails, t) {
  let added = 0

  for (const raw of emails || []) {
    const email = normalizeEmail(raw)

    if (!email) continue

    const [, created] = await ContactEmail.findOrCreate({
      where: { email },
      defaults: { contact_id: contactId, email },
      transaction: t
    })

    if (created) added += 1
  }

  return added
}
