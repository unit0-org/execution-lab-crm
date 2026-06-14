import { Contact } from '@/lib/contact/models'

export async function setBirthday(organizationId, id, parts) {
  await Contact.setBirthday(organizationId, id, parts)

  return { ok: true }
}
