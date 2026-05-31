import { ContactEmail } from '@/lib/db/models'
import { emailError } from './emailError'

export async function updateEmail(id, email) {
  try {
    await ContactEmail.update({ email }, { where: { id } })

    return { ok: true }
  } catch (e) {
    return { error: emailError(e) }
  }
}
