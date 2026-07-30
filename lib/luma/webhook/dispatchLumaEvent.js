import { handleGuestWebhook } from '../controllers/handleGuestWebhook'
import { handleGuestRegistered } from '../controllers/handleGuestRegistered'
import { handleEventWebhook } from '../controllers/handleEventWebhook'
import { handleCalendarSubscribe }
  from '../controllers/handleCalendarSubscribe'

const REGISTERED = 'guest.registered'
const GUEST = ['guest.updated', 'ticket.registered']
const EVENT = ['event.created', 'event.updated']
const SUBSCRIBE = 'calendar.person.subscribed'

// Route one verified Luma webhook to its handler by action type. The
// webhook fires for every action, so anything untracked is ignored.
export function dispatchLumaEvent(event) {
  const type = event.type || event.event_type
  const data = event.data || event

  if (type === REGISTERED) return handleGuestRegistered(data)

  if (GUEST.includes(type)) return handleGuestWebhook(data)

  if (EVENT.includes(type)) return handleEventWebhook(data)

  if (type === SUBSCRIBE) return handleCalendarSubscribe(data)

  return null
}
