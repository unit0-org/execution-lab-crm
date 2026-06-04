// Routes reachable without an authenticated Supabase session.
// Everything else (including '/') redirects to /login.
const PUBLIC_PREFIXES = [
  '/login', '/auth', '/_next', '/favicon', '/api/stripe', '/api/mcp',
  '/.well-known'
]

export function isPublicRoute(pathname) {
  return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}
