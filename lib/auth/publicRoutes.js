// Routes reachable without an authenticated Supabase session.
// Everything else redirects to /login.
// '/api/cron' is public here because each cron route self-authorizes with
// the CRON_SECRET bearer; '/api/stripe' and '/api/luma' are inbound webhooks
// that self-authorize with a signing secret; '/portal' is the login-free
// registration portal.
const PUBLIC_PREFIXES = [
  '/login', '/auth', '/_next', '/favicon', '/api/stripe', '/api/mcp',
  '/api/cron', '/api/luma', '/portal', '/.well-known', '/privacy-policy',
  '/terms-of-service'
]

// Exact paths only — '/' must not be a prefix or it opens every route.
const PUBLIC_EXACT = ['/']

export function isPublicRoute(pathname) {
  if (PUBLIC_EXACT.some((path) => pathname === path)) return true

  return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}
