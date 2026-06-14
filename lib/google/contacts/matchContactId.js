import { resolveContactId } from '@/lib/contact/controllers/resolveContactId'

// Find (or create) the CRM contact for a Google person by its first
// email/phone, carrying the name onto a freshly created contact.
export async function matchContactId(person) {
  const { id } = await resolveContactId({
    email: person.emails[0],
    phone: person.phones[0],
    first_name: person.firstName,
    last_name: person.lastName
  })

  return id
}
