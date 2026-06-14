import { ContactPhone } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function removePhone(organizationId, id) {
  if (!await ownedByOrg(ContactPhone, id, organizationId)) return { ok: true }

  await ContactPhone.destroy({ where: { id } })

  return { ok: true }
}
