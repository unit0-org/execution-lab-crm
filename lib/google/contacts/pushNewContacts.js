import { createPerson } from '../people'
import { unlinkedContacts } from './unlinkedContacts'
import { contactToFields } from './contactToFields'
import { upsertLink } from './upsertLink'

// Create a Google person for each CRM contact not yet on this account,
// then link them. Returns the number pushed.
export async function pushNewContacts(account, token) {
  const contacts = await unlinkedContacts(account)

  for (const contact of contacts) {
    const created = await createPerson(token, contactToFields(contact))

    await upsertLink(account, contact.id, created)
  }

  return contacts.length
}
