import { ContactEmail } from '@/lib/db/models'
import { emailError } from './emailError'

export async function addEmail(organizationId, contactId, email) {
  try {
    await ContactEmail.create({
      organization_id: organizationId,
      contact_id: contactId,
      email
    })

    return { ok: true }
  } catch (e) {
    return { error: emailError(e) }
  }
}
