import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { buildAuthUrl } from '@/lib/google/auth'
import { siteOrigin } from '@/lib/google/origin'
import { setOAuthState } from '@/lib/google/state'

export async function GET(request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.redirect(new URL('/login', request.url))

  const origin = siteOrigin(await headers())
  const state = crypto.randomUUID()
  await setOAuthState(state, { secure: origin.startsWith('https://') })

  return NextResponse.redirect(buildAuthUrl({ origin, state }))
}
