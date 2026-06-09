import { ContactPhone } from '@/lib/db/models'
import { contactInOrg } from './contactInOrg'

export async function addPhone(organizationId, contactId, phone) {
  if (!await contactInOrg(organizationId, contactId)) return { ok: true }

  await ContactPhone.create({ contact_id: contactId, phone })

  return { ok: true }
}
