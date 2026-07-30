import { linkedinFetch, linkedinHeaders } from './client'

// Create a resource — a streamed conversion event, and anything else
// LinkedIn models as a POST.
export function postToLinkedin(path, body) {
  return linkedinFetch(path, {
    method: 'POST',
    headers: linkedinHeaders(),
    body: JSON.stringify(body)
  })
}
