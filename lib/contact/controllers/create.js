import { Contact } from '@/lib/contact/models'
import { insertEmails } from './emails'

export async function createContact(organizationId, first, last, emails) {
  try {
    const contact = await Contact.create({
      organization_id: organizationId,
      first_name: first,
      last_name: last
    })

    await insertEmails(organizationId, contact.id, emails)

    return { id: contact.id }
  } catch (e) {
    return { error: e.message }
  }
}
