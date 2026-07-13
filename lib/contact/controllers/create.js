import { Contact } from '@/lib/contact/models'
import { insertEmails } from './emails'
import { dispatchContactCreated }
  from '@/lib/automation/controllers/triggers/dispatchContactCreated'

export async function createContact(first, last, emails) {
  try {
    const contact = await Contact.create({
      first_name: first,
      last_name: last
    })

    await insertEmails(contact.id, emails)
    await dispatchContactCreated(contact.id)

    return { id: contact.id }
  } catch (e) {
    return { error: e.message }
  }
}
