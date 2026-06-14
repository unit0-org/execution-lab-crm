import { ContactFact } from '@/lib/contact/models'
import { ownedByOrg } from './ownedByOrg'

export async function removeFact(id) {
  if (!await ownedByOrg(ContactFact, id)) return { ok: true }

  await ContactFact.destroy({ where: { id } })

  return { ok: true }
}
