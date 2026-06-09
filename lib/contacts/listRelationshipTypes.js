import { RelationshipType } from '@/lib/db/models'

// All predefined relationship types, alphabetical.
export async function listRelationshipTypes(organizationId) {
  const rows = await RelationshipType.findAll({
    where: { organization_id: organizationId },
    order: [['label', 'ASC']]
  })

  return rows.map((r) => r.toJSON())
}
