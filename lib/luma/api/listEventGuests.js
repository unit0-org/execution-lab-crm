import { lumaFetch } from './client'
import { collectPages } from './paginate'

const PATH = '/v1/events/guests/list'

// Every guest of one Luma event, following pagination to the end.
export function listEventGuests(eventId) {
  return collectPages((cursor) =>
    lumaFetch(PATH, {
      event_id: eventId,
      pagination_limit: 100,
      pagination_cursor: cursor
    })
  )
}
