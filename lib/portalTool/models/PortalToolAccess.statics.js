// Query/mutation helpers for PortalToolAccess, kept out of the model file
// to honour the short-model rule. All keyed by contact_id + tool_key.
export function addStatics(model) {
  model.keysForContact = async function (contactId) {
    const rows = await this.findAll({ where: { contact_id: contactId } })

    return rows.map((row) => row.tool_key)
  }

  model.rowsForContacts = function (contactIds) {
    return this.findAll({ where: { contact_id: contactIds } })
  }

  model.grant = function (contactId, toolKey) {
    return this.findOrCreate({
      where: { contact_id: contactId, tool_key: toolKey }
    })
  }

  model.revoke = function (contactId, toolKey) {
    return this.destroy({
      where: { contact_id: contactId, tool_key: toolKey }
    })
  }
}
