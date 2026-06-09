import { birthdaysSection } from './birthdaysSection'

const names = (f) => {
  if (!f.firstName && !f.lastName) return undefined

  return [{ givenName: f.firstName, familyName: f.lastName }]
}

const map = (list, key) =>
  list?.length ? list.map((v) => ({ [key]: v })) : undefined

const prune = (body) =>
  Object.fromEntries(Object.entries(body).filter(([, v]) => v !== undefined))

// Build a People API person body from CRM fields, omitting any empty
// section. Photo is handled separately and ignored here.
export function personPayload(fields) {
  return prune({
    names: names(fields),
    emailAddresses: map(fields.emails, 'value'),
    phoneNumbers: map(fields.phones, 'value'),
    birthdays: birthdaysSection(fields.birthday)
  })
}
