import { updateSession } from '@/lib/supabase/proxy'
import { isPortalHost } from '@/lib/portal/isPortalHost'
import { isSharedRoute } from '@/lib/portal/isSharedRoute'
import { portalRewrite } from '@/lib/portal/portalRewrite'
import { portalRedirect } from '@/lib/portal/portalRedirect'
import { portalCodeRedirect } from '@/lib/portal/portalCodeRedirect'

export async function proxy(request) {
  const host = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  if (isPortalHost(host) && !isSharedRoute(pathname))
    return portalRewrite(request)

  return portalCodeRedirect(request)
    || portalRedirect(request)
    || updateSession(request)
}

export const config = {
  matcher: [
    // eslint-disable-next-line max-len -- single unavoidable matcher regex
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
}
