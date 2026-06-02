const API =
  'https://www.googleapis.com/calendar/v3/calendars/primary/events'

const query = (timeMin) => new URLSearchParams({
  timeMin,
  singleEvents: 'true',
  orderBy: 'startTime',
  maxResults: '250'
})

// Fetch the user's primary-calendar events since timeMin (ISO string).
export async function listCalendarEvents(accessToken, timeMin) {
  const res = await fetch(`${API}?${query(timeMin)}`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  const data = await res.json()

  if (!res.ok) throw new Error(data.error?.message || 'calendar fetch failed')

  return data.items || []
}
