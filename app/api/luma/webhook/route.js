import { resolveWebhookEvent } from '@/lib/luma/webhook/resolveWebhookEvent'
import { dispatchLumaEvent } from '@/lib/luma/webhook/dispatchLumaEvent'

// Luma calls this for every subscribed action; verify the signature, then
// route guest + event webhooks to their handlers (others are ignored).
export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('webhook-signature')

  try {
    const event = resolveWebhookEvent(body, signature)

    await dispatchLumaEvent(event)
  } catch (e) {
    return new Response(e.message, { status: 400 })
  }

  return new Response('ok')
}
