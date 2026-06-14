import { ContactEmail } from '@/lib/contact/models'
import { normalizeEmail } from './normalizeEmail'

export async function addEmailIfMissing(organizationId, contactId, rawEmail) {
  const email = normalizeEmail(rawEmail)

  if (!email) return

  await ContactEmail.findOrCreate({
    where: { organization_id: organizationId, email },
    defaults: { organization_id: organizationId, contact_id: contactId, email }
  })
}
