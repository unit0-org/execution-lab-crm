import { gmailFetch } from './gmailFetch'

const API = 'https://gmail.googleapis.com/gmail/v1/users/me/messages'
const HEADERS = ['From', 'To', 'Cc', 'Subject', 'Date']

const messageUrl = (id) => {
  const params = new URLSearchParams({ format: 'metadata' })

  for (const name of HEADERS) params.append('metadataHeaders', name)

  return `${API}/${id}?${params}`
}

// One message in metadata form: headers + snippet + timestamp, never the
// body — we store a preview and link out to Gmail for the full thread.
export function fetchMessage(token, id) {
  return gmailFetch(token, messageUrl(id))
}
