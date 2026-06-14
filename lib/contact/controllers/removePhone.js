import { ContactPhone } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function removePhone(id) {
  if (!await ownedByOrg(ContactPhone, id)) return { ok: true }

  await ContactPhone.destroy({ where: { id } })

  return { ok: true }
}
