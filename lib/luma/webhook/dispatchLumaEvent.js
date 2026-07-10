import { handleGuestWebhook } from '../controllers/handleGuestWebhook'
import { handleEventWebhook } from '../controllers/handleEventWebhook'

const GUEST = ['guest.registered', 'guest.updated', 'ticket.registered']
const EVENT = ['event.created', 'event.updated']

// Route one verified Luma webhook to its handler by action type. The
// webhook fires for every action, so anything untracked is ignored.
export function dispatchLumaEvent(event) {
  const type = event.type || event.event_type
  const data = event.data || event

  if (GUEST.includes(type)) return handleGuestWebhook(data)

  if (EVENT.includes(type)) return handleEventWebhook(data)

  return null
}
