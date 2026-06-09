import { findLink } from './findLink'
import { matchContactId } from './matchContactId'
import { upsertLink } from './upsertLink'
import { mergeFields } from './mergeFields'
import { unlinkPerson } from './unlinkPerson'

// Bring one Google person into the CRM: unlink on delete, else link to
// an existing/new contact and merge their fields.
export async function reconcilePerson(account, token, person) {
  if (person.deleted) return unlinkPerson(account, person.resourceName)

  const link = await findLink(account.id, person.resourceName)
  const contactId =
    link?.contact_id || await matchContactId(account.organization_id, person)

  await upsertLink(account, contactId, person)
  await mergeFields(account, token, contactId, person)
}
