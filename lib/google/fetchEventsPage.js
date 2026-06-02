const API =
  'https://www.googleapis.com/calendar/v3/calendars/primary/events'

const query = (timeMin, timeMax, pageToken) => {
  const q = new URLSearchParams({
    timeMin, timeMax, singleEvents: 'true',
    orderBy: 'startTime', maxResults: '250'
  })

  if (pageToken) q.set('pageToken', pageToken)

  return q
}

// Fetch one page of primary-calendar events between timeMin and timeMax.
export async function fetchEventsPage(token, timeMin, timeMax, pageToken) {
  const res = await fetch(`${API}?${query(timeMin, timeMax, pageToken)}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  const data = await res.json()

  if (!res.ok) throw new Error(data.error?.message || 'calendar fetch failed')

  return { items: data.items || [], next: data.nextPageToken }
}
