import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/serviceClient'
import { verifyStripe } from '@/lib/webhooks/verifyStripe'
import { handleStripeEvent } from '@/lib/stripe/handleEvent'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const raw = await request.text()
  const sig = request.headers.get('stripe-signature')
  const event = verifyStripe(raw, sig)
  if (!event) {
    return NextResponse.json({ error: 'invalid signature' }, { status: 401 })
  }

  const supabase = createServiceClient()
  await handleStripeEvent(supabase, event)

  return NextResponse.json({ ok: true })
}
