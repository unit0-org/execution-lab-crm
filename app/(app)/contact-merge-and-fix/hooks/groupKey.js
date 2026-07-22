// A stable identity for a duplicate group: its contact ids joined. Used to
// key the list and to drop a group once it is merged or dismissed.
export function groupKey(group) {
  return group.contacts.map((contact) => contact.id).join(':')
}
