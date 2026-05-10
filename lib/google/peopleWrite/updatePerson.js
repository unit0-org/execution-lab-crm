// Patch a People API person with structured fields. Caller passes a
// resourceName ('people/c1234') and a partial body keyed to a single
// updatePersonFields mask (e.g. 'biographies').
import { peopleRequest } from './api'

export async function fetchEtag(accessToken, resourceName) {
  const json = await peopleRequest(accessToken, 'GET', resourceName, null, { personFields: 'metadata' })

  return json.etag
}

export async function updatePerson(accessToken, resourceName, body, mask) {
  const etag = await fetchEtag(accessToken, resourceName)

  return peopleRequest(accessToken, 'PATCH', `${resourceName}:updateContact`,
    { ...body, etag }, { updatePersonFields: mask })
}
