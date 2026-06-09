import { ContactEmail } from '@/lib/db/models'
import { emailError } from './emailError'
import { normalizeEmail } from './normalizeEmail'

export async function updateEmail(organizationId, id, email) {
  try {
    const update = { email: normalizeEmail(email) }
    const where = { id, organization_id: organizationId }

    await ContactEmail.update(update, { where })

    return { ok: true }
  } catch (e) {
    return { error: emailError(e) }
  }
}
