import { ContactFact } from '@/lib/contact/models'
import { contactInOrg } from './contactInOrg'

export async function addFact(organizationId, contactId, label, value) {
  if (!value) return { error: 'A value is required' }

  if (!await contactInOrg(organizationId, contactId)) return { ok: true }

  await ContactFact.create({
    contact_id: contactId,
    label: label || null,
    value
  })

  return { ok: true }
}
