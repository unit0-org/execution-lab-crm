import { updateSession } from '@/lib/supabase/proxy'
import { isPortalHost } from '@/lib/portal/isPortalHost'
import { portalRewrite } from '@/lib/portal/portalRewrite'
import { portalRedirect } from '@/lib/portal/portalRedirect'

export async function proxy(request) {
  const host = request.headers.get('host') || ''

  if (isPortalHost(host)) return portalRewrite(request)

  const moved = portalRedirect(request)

  if (moved) return moved

  return updateSession(request)
}

export const config = {
  matcher: [
    // eslint-disable-next-line max-len -- single unavoidable matcher regex
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
}
