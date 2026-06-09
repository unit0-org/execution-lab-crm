import { ContactFact } from '@/lib/db/models'
import { ownedByOrg } from './ownedByOrg'

export async function removeFact(organizationId, id) {
  if (!await ownedByOrg(ContactFact, id, organizationId)) return { ok: true }

  await ContactFact.destroy({ where: { id } })

  return { ok: true }
}
