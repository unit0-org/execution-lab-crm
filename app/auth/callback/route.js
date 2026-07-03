import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { afterSession } from '../afterSession'
import { safeNextPath } from '@/lib/auth/safeNextPath'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

const back = (url, to) => NextResponse.redirect(new URL(to, url.origin))

// A failed sign-in returns to the caller's own screen: portal members to
// the portal sign-in, staff to /login — never the wrong one.
const fail = (isPortal, msg) =>
  `${isPortal ? portalRoutePath('/signin') : '/login'}` +
  `?error=${encodeURIComponent(msg)}`

// Supabase Auth callback (PKCE), shared by staff and portal (flow=portal).
export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = safeNextPath(url.searchParams.get('next'))
  const isPortal = url.searchParams.get('flow') === 'portal'

  if (!code) return back(url, fail(isPortal, 'missing_code'))
  const supabase = await createClient()
  const { data, error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) return back(url, fail(isPortal, error.message))
  await afterSession(data.session, isPortal)

  return back(url, next)
}
