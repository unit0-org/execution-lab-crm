import { loadContact } from './loadContact'
import { mergeNames } from './mergeNames'
import { mergeBirthday } from './mergeBirthday'
import { mergePhoto } from './mergePhoto'
import { mergeLists } from './mergeLists'

// Reconcile every field of one CRM contact against its Google person:
// names + birthday (conflict-aware), photo (pull-only), emails/phones.
export async function mergeFields(account, token, contactId, raw) {
  const { contact, emails, phones } = await loadContact(contactId)
  const person = { ...raw, contactId }

  await mergeNames(account, token, contact, person)
  await mergeBirthday(account, token, contact, person)
  await mergePhoto(contact, person)
  await mergeLists(account, token, contact, person, { emails, phones })
}
