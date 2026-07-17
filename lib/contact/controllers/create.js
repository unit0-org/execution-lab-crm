import { Contact } from '@/lib/contact/models'
import { insertEmails } from './emails'
import { dispatchContactCreated }
  from '@/lib/automation/controllers/triggers/dispatchContactCreated'

// Creates the person and attaches the emails that are free. An email already
// in use stays with the contact that owns it — this contact is still created,
// and comes back naming the emails that were left off.
export async function createContact(first, last, emails) {
  try {
    const contact = await Contact.create({
      first_name: first,
      last_name: last
    })

    const emailsInUse = await insertEmails(contact.id, emails)
    await dispatchContactCreated(contact.id)

    return { id: contact.id, emailsInUse }
  } catch (e) {
    return { error: e.message }
  }
}
