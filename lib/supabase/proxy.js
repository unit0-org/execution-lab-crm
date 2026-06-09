import { makeProxyClient } from './proxyClient'
import { isPublicRoute } from '@/lib/auth/publicRoutes'
import { homeRedirect, loginRedirect } from './proxyRedirects'

const gate = (request, user, getResponse) => {
  const { pathname } = request.nextUrl

  if (user && pathname === '/') return homeRedirect(request)

  if (user || isPublicRoute(pathname)) return getResponse()

  return loginRedirect(request, pathname)
}

// Refresh Supabase auth cookies and gate protected routes.
export async function updateSession(request) {
  const { supabase, getResponse } = makeProxyClient(request)
  const { data } = await supabase.auth.getUser()

  return gate(request, data.user, getResponse)
}
