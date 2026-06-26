// Attach each member's granted tool keys (from the access map) to its row,
// so the table can render the Tools column without another query.
export function withToolKeys(members, accessMap) {
  return members.map((member) => ({
    ...member,
    toolKeys: accessMap[member.contactId] || []
  }))
}
