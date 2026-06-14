import { ContactPhone } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function updatePhone(id, phone) {
  if (!await ownedByOrg(ContactPhone, id)) return { ok: true }

  await ContactPhone.update({ phone }, { where: { id } })

  return { ok: true }
}
