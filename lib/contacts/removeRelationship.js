import { ContactRelationship } from '@/lib/db/models'

export async function removeRelationship(id) {
  await ContactRelationship.destroy({ where: { id } })

  return { ok: true }
}
