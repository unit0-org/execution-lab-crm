import { ContactRelationship } from '@/lib/db/models'

// Link two contacts by a predefined type id or a free-text label.
export async function addRelationship(fromId, toId, typeId, customLabel) {
  if (!toId) return { error: 'Pick a contact' }

  if (!typeId && !customLabel) return { error: 'Pick a relationship' }

  await ContactRelationship.create({
    from_contact_id: fromId,
    to_contact_id: toId,
    relationship_type_id: typeId || null,
    custom_label: typeId ? null : customLabel
  })

  return { ok: true }
}
