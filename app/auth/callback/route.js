import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { afterSession } from '../afterSession'
import { safeNextPath } from '@/lib/auth/safeNextPath'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { callbackOrigin } from './callbackOrigin'

const back = (origin, to) => NextResponse.redirect(new URL(to, origin))

// A failed sign-in returns to the caller's own screen (portal vs staff).
const fail = (isPortal, msg) =>
  `${isPortal ? portalRoutePath('/signin') : '/login'}` +
  `?error=${encodeURIComponent(msg)}`

export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = safeNextPath(url.searchParams.get('next'))
  const isPortal = url.searchParams.get('flow') === 'portal'
  const origin = callbackOrigin(isPortal)

  if (!code) return back(origin, fail(isPortal, 'missing_code'))
  const supabase = await createClient()
  const { data, error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) return back(origin, fail(isPortal, error.message))
  await afterSession(data.session, isPortal)

  return back(origin, next)
}
