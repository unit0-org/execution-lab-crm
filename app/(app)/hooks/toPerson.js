import { fullName } from '../contacts/components/fullName'

const emailOf = (contact) => contact.contact_email?.[0]?.email || ''

// Shape a contact row for the command palette: id, a display name
// (falling back to the email), a subtitle, and the avatar photo.
export function toPerson(contact) {
  return {
    id: contact.id,
    name: fullName(contact) || emailOf(contact),
    subtitle: emailOf(contact),
    photo: contact.photo_url
  }
}
