import { updateSession } from '@/lib/supabase/proxy'
import { isPortalHost } from '@/lib/portal/isPortalHost'
import { portalRewrite } from '@/lib/portal/portalRewrite'

export async function proxy(request) {
  const host = request.headers.get('host') || ''

  if (isPortalHost(host)) return portalRewrite(request)

  return updateSession(request)
}

export const config = {
  matcher: [
    // eslint-disable-next-line max-len -- single unavoidable matcher regex
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
}
