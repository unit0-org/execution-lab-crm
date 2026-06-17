import { ContactRelationship } from '@/lib/contact/models'

// Op1 relationship: add an edge unless an identical (from, to, type|label)
// one exists. A custom label is used only when no type id is given. Returns
// 1 when created, else 0.
export async function addRelationshipTx(fromId, toId, rel, t) {
  const typeId = rel.typeId || null
  const [, created] = await ContactRelationship.findOrCreate({
    where: {
      from_contact_id: fromId,
      to_contact_id: toId,
      relationship_type_id: typeId,
      custom_label: typeId ? null : (rel.customLabel || null)
    },
    transaction: t
  })

  return created ? 1 : 0
}
