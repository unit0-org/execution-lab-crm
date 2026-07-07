import { headerValue } from './headerValue'

// Normalize a Gmail metadata message into the fields we store. internalDate
// is epoch milliseconds; the rest come from the requested headers.
export function parseMessage(message) {
  const headers = message.payload?.headers || []

  return {
    gmailId: message.id,
    threadId: message.threadId,
    subject: headerValue(headers, 'Subject'),
    snippet: message.snippet || null,
    sentAt: new Date(Number(message.internalDate)),
    from: headerValue(headers, 'From'),
    to: headerValue(headers, 'To'),
    cc: headerValue(headers, 'Cc')
  }
}
