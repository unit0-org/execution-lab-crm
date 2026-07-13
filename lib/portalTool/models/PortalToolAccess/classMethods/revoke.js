// Revoke a tool from a contact.
export function revoke(contactId, toolKey) {
  return this.destroy({
    where: { contact_id: contactId, tool_key: toolKey }
  })
}
