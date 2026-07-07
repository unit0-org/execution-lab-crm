// Build one storable row per matched contact for a parsed message. The
// header values are kept as-is (display text); the snippet is Gmail's own
// preview — no body is stored.
export function emailMessageRows(message, direction, contactIds) {
  return contactIds.map((contactId) => ({
    contact_id: contactId,
    gmail_message_id: message.gmailId,
    thread_id: message.threadId,
    direction,
    from_address: message.from || null,
    to_address: message.to || null,
    subject: message.subject || null,
    snippet: message.snippet,
    sent_at: message.sentAt
  }))
}
