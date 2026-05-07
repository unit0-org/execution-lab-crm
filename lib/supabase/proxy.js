import { NextResponse } from 'next/server'
import { makeProxyClient } from './proxyClient'
import { isPublicRoute } from '@/lib/auth/publicRoutes'

// Refresh Supabase auth cookies and gate protected routes.
export async function updateSession(request) {
  const { supabase, getResponse } = makeProxyClient(request)

  // Do not run logic between makeProxyClient and getUser.
  const { data: { user } } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl
  if (!user && !isPublicRoute(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('next', pathname)

    return NextResponse.redirect(url)
  }

  return getResponse()
}
