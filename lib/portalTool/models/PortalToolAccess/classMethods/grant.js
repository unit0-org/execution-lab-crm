// Grant a tool to a contact (idempotent via the unique key).
export function grant(contactId, toolKey) {
  return this.findOrCreate({
    where: { contact_id: contactId, tool_key: toolKey }
  })
}
