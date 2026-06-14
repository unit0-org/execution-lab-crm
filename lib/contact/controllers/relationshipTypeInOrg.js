import { RelationshipType } from '@/lib/contact/models'

// True when a relationship type id exists.
export async function relationshipTypeInOrg(typeId) {
  const row = await RelationshipType.findOne({
    where: { id: typeId }
  })

  return Boolean(row)
}
