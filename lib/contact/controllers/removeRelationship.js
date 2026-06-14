import { ContactRelationship } from '@/lib/contact/models'
import { relationshipInOrg } from './relationshipInOrg'

export async function removeRelationship(id) {
  if (!await relationshipInOrg(id)) return { ok: true }

  await ContactRelationship.destroy({ where: { id } })

  return { ok: true }
}
