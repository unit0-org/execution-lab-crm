// The tool keys a contact has been granted.
export function keysForContact(contactId) {
  return this.findAll({ where: { contact_id: contactId } })
    .then((rows) => rows.map((row) => row.tool_key))
}
