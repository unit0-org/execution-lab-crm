import { Contact } from '@/lib/contact/models'

// True when a contact id exists. Used to guard child writes keyed by
// contact id (phone, fact, note).
export async function contactInOrg(contactId) {
  const row = await Contact.findOne({
    where: { id: contactId }
  })

  return Boolean(row)
}
