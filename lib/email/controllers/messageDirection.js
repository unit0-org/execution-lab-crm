import { normalizeEmail } from '@/lib/contact/controllers/normalizeEmail'
import { parseAddresses } from './parseAddresses'

// Whether the mailbox owner sent or received the message, plus the other
// party's addresses — the recipients of an outbound mail, or the sender of
// an inbound one. Those are the addresses we match against known contacts.
export function messageDirection(accountEmail, message) {
  const owner = normalizeEmail(accountEmail)
  const from = parseAddresses(message.from)
  const outbound = from.includes(owner)
  const recipients = parseAddresses(`${message.to},${message.cc}`)

  return {
    direction: outbound ? 'outbound' : 'inbound',
    counterparts: outbound ? recipients : from
  }
}
