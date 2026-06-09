// A contact's first + last name joined, skipping blanks.
export function fullName(contact) {
  return [contact.first_name, contact.last_name].filter(Boolean).join(' ')
}
