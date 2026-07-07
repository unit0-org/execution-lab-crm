import { gmailFetch } from './gmailFetch'

const API = 'https://gmail.googleapis.com/gmail/v1/users/me/messages'

const pageUrl = (q, pageToken) => {
  const params = new URLSearchParams({ q, maxResults: '500' })

  if (pageToken) params.set('pageToken', pageToken)

  return `${API}?${params}`
}

// One page of message ids (newest first) matching Gmail search query `q`.
export async function fetchMessagesPage(token, q, pageToken) {
  const data = await gmailFetch(token, pageUrl(q, pageToken))

  return { items: data.messages || [], next: data.nextPageToken }
}
