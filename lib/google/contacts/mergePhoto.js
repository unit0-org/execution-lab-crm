import { Contact } from '@/lib/db/models'

// Pull-only: copy Google's photo onto the CRM contact when it differs.
// Photos are never pushed and never raise a conflict.
export function mergePhoto(contact, person) {
  const google = person.photoUrl

  if (!google) return

  if (contact.photo_url === google) return

  return Contact.update(
    { photo_url: google }, { where: { id: contact.id } }
  )
}
