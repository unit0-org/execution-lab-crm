// Routes accessible without an authenticated Supabase session.
const PUBLIC_PREFIXES = ['/login', '/auth', '/_next', '/favicon']

export function isPublicRoute(pathname) {
  if (pathname === '/') return true

  return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}
