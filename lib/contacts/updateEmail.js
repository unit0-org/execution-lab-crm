import { ContactEmail } from '@/lib/db/models'

export async function updateEmail(id, email) {
  await ContactEmail.update({ email }, { where: { id } })

  return { ok: true }
}
