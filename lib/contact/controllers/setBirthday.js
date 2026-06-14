import { Contact } from '@/lib/contact/models'

export async function setBirthday(id, parts) {
  await Contact.setBirthday(id, parts)

  return { ok: true }
}
