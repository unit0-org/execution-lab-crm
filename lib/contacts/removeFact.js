import { ContactFact } from '@/lib/db/models'

export async function removeFact(id) {
  await ContactFact.destroy({ where: { id } })

  return { ok: true }
}
