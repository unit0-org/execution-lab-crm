const LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/

// Supabase's pooler requires TLS; the Postgres a local `supabase start`
// brings up refuses it outright ("server does not support SSL"). Decide from
// the host, so one connection string works for both without a second flag.
export function requiresSsl(url) {
  try {
    return !LOCAL.test(new URL(url).hostname)
  } catch {
    return true
  }
}
