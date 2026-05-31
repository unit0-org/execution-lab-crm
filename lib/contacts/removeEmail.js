import { ContactEmail } from '@/lib/db/models'

export async function removeEmail(id) {
  await ContactEmail.destroy({ where: { id } })

  return { ok: true }
}
