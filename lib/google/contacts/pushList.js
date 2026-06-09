import { updatePerson } from '../people'
import { upsertLink } from './upsertLink'

const union = (a, b) => [...new Set([...a, ...b].filter(Boolean))]

// Push the union of CRM + Google emails/phones back to Google so it
// gains any CRM-only values. Refreshes the stored etag.
export async function pushList(account, token, contact, person, crm) {
  const emails = union(crm.emails, person.emails)
  const phones = union(crm.phones, person.phones)
  const fields = { emails, phones }
  const mask = 'emailAddresses,phoneNumbers'

  const { etag } = await updatePerson(
    token, person.resourceName, person.etag, fields, mask
  )

  await upsertLink(account, contact.id, { ...person, etag })
}
