import { peopleFetch } from './peopleFetch'
import { personPayload } from './personPayload'

const url = (resourceName, mask) =>
  `https://people.googleapis.com/v1/${resourceName}:updateContact` +
  `?updatePersonFields=${mask}`

// Patch an existing Google contact. The etag is required by the API
// for optimistic concurrency; return the fresh etag.
export async function updatePerson(token, resourceName, etag, fields, mask) {
  const person = await peopleFetch(token, url(resourceName, mask), {
    method: 'PATCH',
    body: JSON.stringify({ ...personPayload(fields), etag })
  })

  return { etag: person.etag }
}
