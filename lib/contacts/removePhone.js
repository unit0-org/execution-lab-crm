import { ContactPhone } from '@/lib/db/models'

export async function removePhone(id) {
  await ContactPhone.destroy({ where: { id } })

  return { ok: true }
}
