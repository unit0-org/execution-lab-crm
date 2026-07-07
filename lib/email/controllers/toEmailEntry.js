const GMAIL_THREAD = 'https://mail.google.com/mail/#all'

// Shape a synced email into a contact-activity entry. The body lives in
// Gmail, so the link opens the thread there.
export function toEmailEntry(message) {
  const sent = message.direction === 'outbound'

  return {
    id: `em:${message.id}`,
    kind: 'email',
    href: `${GMAIL_THREAD}/${message.thread_id}`,
    title: message.subject || '(no subject)',
    date: message.sent_at,
    status: sent ? 'Sent' : 'Received',
    statusTone: 'neutral'
  }
}
