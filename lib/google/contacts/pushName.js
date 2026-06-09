import { updatePerson } from '../people'
import { upsertLink } from './upsertLink'

// Push the CRM contact's name to its Google person, then refresh the
// stored etag so the next patch stays in sync.
export async function pushName(account, token, contact, person) {
  const fields = { firstName: contact.first_name, lastName: contact.last_name }

  const { etag } = await updatePerson(
    token, person.resourceName, person.etag, fields, 'names'
  )

  await upsertLink(account, contact.id, { ...person, etag })
}
