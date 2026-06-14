import { ContactPhone } from '@/lib/contact/models'
import { contactInOrg } from './contactInOrg'

export async function addPhone(organizationId, contactId, phone) {
  if (!await contactInOrg(organizationId, contactId)) return { ok: true }

  await ContactPhone.create({ contact_id: contactId, phone })

  return { ok: true }
}
