import { lumaFetch } from './client'
import { collectPages } from './paginate'

const PATH = '/v1/events/guests/list'

// Every guest of one Luma event, following pagination to the end. The
// endpoint identifies the event by `event_id` (the event's `id`, e.g.
// `evt-…`); sending `event_api_id` gets a 400 that drops every guest.
export function listEventGuests(eventId) {
  return collectPages((cursor) =>
    lumaFetch(PATH, {
      event_id: eventId,
      pagination_limit: 100,
      pagination_cursor: cursor
    })
  )
}
