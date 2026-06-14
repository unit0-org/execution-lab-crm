import { ContactRelationship } from '@/lib/contact/models'

// True when a relationship row exists.
export async function relationshipInOrg(id) {
  const row = await ContactRelationship.findOne({
    where: { id }
  })

  return Boolean(row)
}
