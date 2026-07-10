import { lumaFetch } from './client'
import { collectPages } from './paginate'

const PATH = '/v1/calendars/events/list'

// Every event on the API key's calendar, newest first, all pages.
export function listCalendarEvents() {
  return collectPages((cursor) =>
    lumaFetch(PATH, {
      pagination_limit: 50,
      pagination_cursor: cursor
    })
  )
}
