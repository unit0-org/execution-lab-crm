import { ContactEmail } from '@/lib/contact/models'
import { emailError } from './emailError'
import { normalizeEmail } from './normalizeEmail'

export async function updateEmail(id, email) {
  try {
    const update = { email: normalizeEmail(email) }
    const where = { id }

    await ContactEmail.update(update, { where })

    return { ok: true }
  } catch (e) {
    return { error: emailError(e) }
  }
}
