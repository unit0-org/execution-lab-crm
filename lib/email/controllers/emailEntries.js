import { ContactEmailMessage } from '../models'
import { toEmailEntry } from './toEmailEntry'

// A contact's synced emails, shaped as activity entries.
export async function emailEntries(contactId) {
  const rows = await ContactEmailMessage.findAll({
    where: { contact_id: contactId },
    order: [['sent_at', 'DESC']]
  })

  return rows.map((row) => toEmailEntry(row.toJSON()))
}
