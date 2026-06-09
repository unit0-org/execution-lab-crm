import { RelationshipType } from '@/lib/db/models'

// True when a relationship type id belongs to the given organization.
export async function relationshipTypeInOrg(organizationId, typeId) {
  const row = await RelationshipType.findOne({
    where: { id: typeId, organization_id: organizationId }
  })

  return Boolean(row)
}
