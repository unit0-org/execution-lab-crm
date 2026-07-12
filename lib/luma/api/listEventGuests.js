import { lumaFetch } from './client'
import { collectPages } from './paginate'

const PATH = '/v1/events/guests/list'

// Every guest of one Luma event, following pagination to the end. The
// endpoint identifies the event by `event_api_id` (its `api_id`); sending
// `event_id` gets a 400 that aborts the whole reconcile.
export function listEventGuests(eventId) {
  return collectPages((cursor) =>
    lumaFetch(PATH, {
      event_api_id: eventId,
      pagination_limit: 100,
      pagination_cursor: cursor
    })
  )
}
