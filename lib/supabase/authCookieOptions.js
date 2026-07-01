// Shared auth-cookie options for every Supabase client. Setting a parent
// domain (AUTH_COOKIE_DOMAIN=.theexecutionlab.ca in prod) shares the
// session across the crm.* and portal.* subdomains — one sign-in covers
// both, which the two-layer staff/member gate relies on (see
// ARCHITECTURE.md). Left unset on localhost/preview so cookies stay
// host-scoped and still work there.
export function authCookieOptions() {
  const domain = process.env.AUTH_COOKIE_DOMAIN

  return domain ? { domain } : undefined
}
