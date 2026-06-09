import { mapEmails } from './mapEmails'
import { mapBirthday } from './mapBirthday'
import { mapPhotoUrl } from './mapPhotoUrl'

// Reduce a raw People API person to the CRM-facing shape the sync
// engine consumes.
export function mapPerson(person) {
  const name = person.names?.[0] || {}

  return {
    resourceName: person.resourceName,
    etag: person.etag,
    deleted: Boolean(person.metadata?.deleted),
    firstName: name.givenName || null,
    lastName: name.familyName || null,
    emails: mapEmails(person.emailAddresses),
    phones: (person.phoneNumbers || []).map((p) => p.value).filter(Boolean),
    birthday: mapBirthday(person.birthdays),
    photoUrl: mapPhotoUrl(person.photos)
  }
}
