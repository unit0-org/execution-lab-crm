import { ContactPhone } from '@/lib/db/models'

export async function addPhone(contactId, phone) {
  await ContactPhone.create({ contact_id: contactId, phone })

  return { ok: true }
}
