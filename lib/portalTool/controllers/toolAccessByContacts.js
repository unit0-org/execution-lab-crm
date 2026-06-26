import { PortalToolAccess } from '../models'

// A { contactId: [toolKey, ...] } map for a set of contacts, so the admin
// members table can show each member's tools in one query.
export async function toolAccessByContacts(contactIds) {
  const rows = await PortalToolAccess.rowsForContacts(contactIds)

  return rows.reduce((map, row) => {
    const keys = map[row.contact_id] || []
    keys.push(row.tool_key)
    map[row.contact_id] = keys

    return map
  }, {})
}
