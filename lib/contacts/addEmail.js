import { ContactEmail } from '@/lib/db/models'
import { emailError } from './emailError'

export async function addEmail(contactId, email) {
  try {
    await ContactEmail.create({ contact_id: contactId, email })

    return { ok: true }
  } catch (e) {
    return { error: emailError(e) }
  }
}
