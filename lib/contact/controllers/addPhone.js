import { ContactPhone } from '@/lib/contact/models'
import { contactInOrg } from './contactInOrg'

export async function addPhone(contactId, phone) {
  if (!await contactInOrg(contactId)) return { ok: true }

  await ContactPhone.create({ contact_id: contactId, phone })

  return { ok: true }
}
