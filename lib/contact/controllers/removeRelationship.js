import { ContactRelationship } from '@/lib/contact/models'
import { relationshipInOrg } from './relationshipInOrg'

export async function removeRelationship(organizationId, id) {
  if (!await relationshipInOrg(organizationId, id)) return { ok: true }

  await ContactRelationship.destroy({ where: { id } })

  return { ok: true }
}
