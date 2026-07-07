import { fetchMessage } from '@/lib/google/gmail'
import { parseMessage } from './parseMessage'
import { messageDirection } from './messageDirection'
import { resolveMessageContacts } from './resolveMessageContacts'
import { emailMessageRows } from './emailMessageRows'
import { upsertEmailMessage } from './upsertEmailMessage'

// Import one Gmail message: fetch its metadata, decide direction, match the
// other party to known contacts, store a row per match. Returns how many
// contact rows were written (0 when no participant is a known contact).
export async function importMessage(token, accountEmail, id) {
  const message = parseMessage(await fetchMessage(token, id))
  const { direction, counterparts } = messageDirection(accountEmail, message)
  const contactIds = await resolveMessageContacts(counterparts)
  const rows = emailMessageRows(message, direction, contactIds)

  for (const row of rows) await upsertEmailMessage(row)

  return rows.length
}
