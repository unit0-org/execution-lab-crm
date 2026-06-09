import { updatePerson } from '../people'
import { upsertLink } from './upsertLink'

const birthdayOf = (c) => ({
  day: c.birth_day,
  month: c.birth_month,
  year: c.birth_year
})

// Push the CRM contact's birthday to Google, refreshing the etag.
export async function pushBirthday(account, token, contact, person) {
  const fields = { birthday: birthdayOf(contact) }

  const { etag } = await updatePerson(
    token, person.resourceName, person.etag, fields, 'birthdays'
  )

  await upsertLink(account, contact.id, { ...person, etag })
}
