// Routes accessible without an authenticated Supabase session.
// /api/cron uses bearer auth; /api/webhooks uses signature verification.
const PUBLIC_PREFIXES = [
  '/login', '/auth', '/api/cron', '/api/webhooks', '/_next', '/favicon',
]

export function isPublicRoute(pathname) {
  if (pathname === '/') return true

  return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}
