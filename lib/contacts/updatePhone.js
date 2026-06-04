import { ContactPhone } from '@/lib/db/models'

export async function updatePhone(id, phone) {
  await ContactPhone.update({ phone }, { where: { id } })

  return { ok: true }
}
