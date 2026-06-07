import { RelationshipType } from '@/lib/db/models'

// All predefined relationship types, alphabetical.
export async function listRelationshipTypes() {
  const rows = await RelationshipType.findAll({ order: [['label', 'ASC']] })

  return rows.map((r) => r.toJSON())
}
