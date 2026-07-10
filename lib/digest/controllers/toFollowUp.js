// One follow-up row: the contact's name plus when we last touched them
// (null when we never have).
export function toFollowUp(contact, lastActivity) {
  return {
    id: contact.id,
    name: contact.full_name || 'Unknown',
    lastActivity: lastActivity || null,
    neverContacted: !lastActivity
  }
}
