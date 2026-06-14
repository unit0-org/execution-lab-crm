import { ContactPhone } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function updatePhone(organizationId, id, phone) {
  if (!await ownedByOrg(ContactPhone, id, organizationId)) return { ok: true }

  await ContactPhone.update({ phone }, { where: { id } })

  return { ok: true }
}
