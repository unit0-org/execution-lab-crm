import { ContactFact } from '@/lib/db/models'
import { factIdFromNugget } from './factIdFromNugget'

export async function removeFact(id) {
  await ContactFact.destroy({ where: { id: factIdFromNugget(id) } })

  return { ok: true }
}
