import { linkedinFetch, linkedinHeaders } from './client'
import { ruleIdFromUrn } from './ruleIdFromUrn'

// Rest.li partial update: LinkedIn takes a `$set` patch body, and the
// method rides in a header rather than the HTTP verb.
export function setAttributionWindow(urn, days) {
  const patch = { patch: { $set: { postClickAttributionWindowSize: days } } }

  return linkedinFetch(`/conversions/${ruleIdFromUrn(urn)}`, {
    method: 'POST',
    headers: linkedinHeaders({ 'x-restli-method': 'PARTIAL_UPDATE' }),
    body: JSON.stringify(patch)
  })
}
