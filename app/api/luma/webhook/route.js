import { resolveWebhookEvent } from '@/lib/luma/webhook/resolveWebhookEvent'
import { handleGuestWebhook }
  from '@/lib/luma/controllers/handleGuestWebhook'

const GUEST_EVENTS = [
  'guest.registered', 'guest.updated', 'ticket.registered'
]

// Luma calls this on guest activity; verify the signature, then fold the
// guest into our event/participant records.
export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('webhook-signature')

  try {
    const event = resolveWebhookEvent(body, signature)
    const type = event.type || event.event_type

    if (GUEST_EVENTS.includes(type))
      await handleGuestWebhook(event.data || event)
  } catch (e) {
    return new Response(e.message, { status: 400 })
  }

  return new Response('ok')
}
