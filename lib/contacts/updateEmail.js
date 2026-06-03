import { ContactEmail } from '@/lib/db/models'
import { emailError } from './emailError'
import { normalizeEmail } from './normalizeEmail'

export async function updateEmail(id, email) {
  try {
    const update = { email: normalizeEmail(email) }

    await ContactEmail.update(update, { where: { id } })

    return { ok: true }
  } catch (e) {
    return { error: emailError(e) }
  }
}
