import { ContactRelationship } from '@/lib/contact/models'
import { relationshipEnds } from './relationshipEnds'

// Link two contacts by a predefined type id or a free-text label.
export async function addRelationship(fromId, toId, typeId, label) {
  if (!toId) return { error: 'Pick a contact' }

  if (!typeId && !label) return { error: 'Pick a relationship' }

  const ends = await relationshipEnds(fromId, toId, typeId)

  if (ends.error) return ends

  return saveRelationship(fromId, toId, typeId, label)
}

async function saveRelationship(fromId, toId, typeId, customLabel) {
  await ContactRelationship.create({
    from_contact_id: fromId,
    to_contact_id: toId,
    relationship_type_id: typeId || null,
    custom_label: typeId ? null : customLabel
  })

  return { ok: true }
}
