const fullName = (c) =>
  [c?.first_name, c?.last_name].filter(Boolean).join(' ')

// Shape a relationship from the viewed contact's perspective: the other
// party plus the label (predefined type or custom free text).
export function toRelationshipRow(rel, contactId) {
  const outgoing = rel.from_contact_id === contactId
  const other = outgoing ? rel.to_contact : rel.from_contact

  return {
    id: rel.id,
    contactId: other?.id,
    name: fullName(other),
    label: rel.type ? rel.type.label : rel.custom_label
  }
}
