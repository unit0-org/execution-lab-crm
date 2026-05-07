import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/serviceClient'
import { verifyLuma } from '@/lib/webhooks/verifyLuma'
import { handleLumaEvent } from '@/lib/luma/handleEvent'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const raw = await request.text()
  const sig = request.headers.get('x-luma-signature')
  if (!verifyLuma(raw, sig)) {
    return NextResponse.json({ error: 'invalid signature' }, { status: 401 })
  }

  const supabase = createServiceClient()
  await handleLumaEvent(supabase, JSON.parse(raw))

  return NextResponse.json({ ok: true })
}
