import { peopleFetch } from './peopleFetch'
import { personPayload } from './personPayload'

const URL = 'https://people.googleapis.com/v1/people:createContact'

// Create a Google contact from CRM fields; return its identifiers.
export async function createPerson(accessToken, fields) {
  const person = await peopleFetch(accessToken, URL, {
    method: 'POST',
    body: JSON.stringify(personPayload(fields))
  })

  return { resourceName: person.resourceName, etag: person.etag }
}
