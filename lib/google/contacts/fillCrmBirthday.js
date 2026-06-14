import { Contact } from '@/lib/contact/models'

// Copy the Google person's birthday onto the CRM contact.
export function fillCrmBirthday(contact, person) {
  const b = person.birthday

  return Contact.update(
    { birth_day: b.day, birth_month: b.month, birth_year: b.year || null },
    { where: { id: contact.id } }
  )
}
