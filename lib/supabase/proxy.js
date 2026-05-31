import { NextResponse } from 'next/server'
import { makeProxyClient } from './proxyClient'
import { isPublicRoute } from '@/lib/auth/publicRoutes'

const gate = (request, user, getResponse) => {
  const { pathname } = request.nextUrl
  if (user || isPublicRoute(pathname)) return getResponse()
  const url = request.nextUrl.clone()
  url.pathname = '/login'
  url.searchParams.set('next', pathname)
  return NextResponse.redirect(url)
}

// Refresh Supabase auth cookies and gate protected routes.
export function updateSession(request) {
  const { supabase, getResponse } = makeProxyClient(request)
  return supabase.auth.getUser().then(({ data }) =>
    gate(request, data.user, getResponse),
  )
}
