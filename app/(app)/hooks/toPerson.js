import { fullName } from '../contacts/components/fullName'

const emailOf = (contact) => contact.contact_email?.[0]?.email || ''

// Shape a contact row for the command palette: id, a display name
// (falling back to the email), a subtitle, and the avatar photo. The
// subtitle is blank when the name already is the email, to avoid showing
// it twice.
export function toPerson(contact) {
  const name = fullName(contact)
  const email = emailOf(contact)

  return {
    id: contact.id,
    name: name || email,
    subtitle: name ? email : '',
    photo: contact.photo_url
  }
}
