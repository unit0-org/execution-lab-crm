import { Contact } from '@/lib/db/models'
import { insertEmails } from './emails'

export async function createContact(first, last, emails) {
  try {
    const contact = await Contact.create({
      first_name: first,
      last_name: last
    })

    await insertEmails(contact.id, emails)

    return { id: contact.id }
  } catch (e) {
    return { error: e.message }
  }
}
