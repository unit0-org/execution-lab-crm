import { ContactRelationship } from '@/lib/db/models'

// True when a relationship row is owned by the org. The row carries no
// organization_id, so we scope through its from_contact.
export async function relationshipInOrg(organizationId, id) {
  const row = await ContactRelationship.findOne({
    where: { id },
    include: [{
      association: 'from_contact',
      required: true,
      where: { organization_id: organizationId }
    }]
  })

  return Boolean(row)
}
