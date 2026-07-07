import { ContactEmailMessage } from '../models'

// Store one message↔contact row, keyed on (gmail_message_id, contact_id) so
// re-syncing the same message updates it rather than duplicating.
export async function upsertEmailMessage(row) {
  const [record, created] = await ContactEmailMessage.findOrCreate({
    where: {
      gmail_message_id: row.gmail_message_id,
      contact_id: row.contact_id
    },
    defaults: row
  })

  if (!created) await record.update(row)

  return created
}
