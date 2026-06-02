import { fetchEventsPage } from './fetchEventsPage'

// Every primary-calendar event between timeMin and timeMax (ISO strings),
// following pagination so a busy window is never truncated.
export async function listCalendarEvents(token, timeMin, timeMax) {
  const items = []
  let pageToken
  let more = true

  while (more) {
    const page = await fetchEventsPage(token, timeMin, timeMax, pageToken)

    items.push(...page.items)
    pageToken = page.next
    more = Boolean(pageToken)
  }

  return items
}
