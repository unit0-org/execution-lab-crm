import { ContactEmail } from '@/lib/contact/models'

export async function removeEmail(id) {
  await ContactEmail.destroy({
    where: { id }
  })

  return { ok: true }
}
