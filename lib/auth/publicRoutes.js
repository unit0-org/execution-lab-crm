// Routes reachable without an authenticated Supabase session.
// Everything else redirects to /login.
const PUBLIC_PREFIXES = [
  '/login', '/auth', '/_next', '/favicon', '/api/stripe', '/api/mcp',
  '/.well-known', '/privacy-policy', '/terms-of-service'
]

// Exact paths only — '/' must not be a prefix or it opens every route.
const PUBLIC_EXACT = ['/']

export function isPublicRoute(pathname) {
  if (PUBLIC_EXACT.some((path) => pathname === path)) return true

  return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}
