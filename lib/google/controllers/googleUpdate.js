// Build the People API { fields, updateMask } to push one resolved
// field to Google, using the contact for the full name section.
const nameUpdate = (contact) => ({
  fields: { firstName: contact.first_name, lastName: contact.last_name },
  updateMask: 'names'
})

const birthdayUpdate = (contact) => ({
  fields: {
    birthday: {
      day: contact.birth_day,
      month: contact.birth_month,
      year: contact.birth_year
    }
  },
  updateMask: 'birthdays'
})

export function googleUpdate(field, contact) {
  if (field === 'birthday') return birthdayUpdate(contact)

  return nameUpdate(contact)
}
