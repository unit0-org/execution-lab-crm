import { ContactEmail } from '@/lib/contact/models'
import { normalizeEmail } from './normalizeEmail'

const toRow = (contactId) => (email) => ({ contact_id: contactId, email })

// Attaches the emails that are free and reports the ones already on another
// contact — those are left off, and the caller tells the user about them.
export async function insertEmails(contactId, emails) {
  const wanted = emails.filter(Boolean)
  const inUse = await ContactEmail.findTakenEmails(wanted)
  const free = wanted.filter((e) => !inUse.includes(normalizeEmail(e)))

  if (!free.length) return inUse

  await ContactEmail.bulkCreate(free.map(toRow(contactId)), {
    ignoreDuplicates: true
  })

  return inUse
}
