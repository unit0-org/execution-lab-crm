import { ContactEmail } from '@/lib/db/models'

const clean = (emails) => emails.filter(Boolean)

export async function insertEmails(contactId, emails) {
  const rows = clean(emails)
    .map((email) => ({ contact_id: contactId, email }))

  if (!rows.length) return

  await ContactEmail.bulkCreate(rows)
}
