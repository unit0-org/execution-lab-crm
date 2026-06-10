import { NextResponse } from 'next/server'
import { portalOrigin } from './portalOrigin'

const PREFIX = '/portal'

// On the CRM host, bounce any /portal/* request to the portal's own
// domain (sub-path + query preserved) so client-facing pages never show
// under the CRM domain. No-op until the portal origin is configured.
export function portalRedirect(request) {
  const origin = portalOrigin()
  const { pathname, search } = request.nextUrl
  const isPortal = pathname === PREFIX || pathname.startsWith(`${PREFIX}/`)

  if (!origin || !isPortal) return null

  const path = pathname.slice(PREFIX.length) || '/'

  return NextResponse.redirect(`${origin}${path}${search}`, 307)
}
