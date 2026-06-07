// Carries the autocomplete selections into the form's FormData.
export function RelHiddenInputs({ contactId, contact, rel }) {
  const toId = contact.contactId || ''
  const typeId = rel.typeId || ''
  const customLabel = rel.typeId ? '' : rel.label

  return (
    <>
      <input type="hidden" name="contact_id" value={contactId} />
      <input type="hidden" name="to_contact_id" value={toId} />
      <input type="hidden" name="relationship_type_id" value={typeId} />
      <input type="hidden" name="custom_label" value={customLabel} />
    </>
  )
}
