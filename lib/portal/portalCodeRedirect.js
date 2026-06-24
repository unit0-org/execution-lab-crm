import { NextResponse } from 'next/server'
import { portalOrigin } from './portalOrigin'

// A portal magic link whose redirect_to isn't allow-listed in Supabase
// falls back to the project Site URL (the CRM host) and lands on the CRM
// root as `/?code=…`. The PKCE verifier cookie was set on the portal host,
// so bounce the code there — to the shared /auth/callback — to exchange it.
// No-op without a root-level code or a configured portal origin.
export function portalCodeRedirect(request) {
  const { pathname, searchParams } = request.nextUrl
  const code = searchParams.get('code')
  const origin = portalOrigin()

  if (pathname !== '/' || !code || !origin) return null

  const url = new URL('/auth/callback', origin)

  url.searchParams.set('code', code)
  url.searchParams.set('flow', 'portal')
  url.searchParams.set('next', '/account')

  return NextResponse.redirect(url)
}
