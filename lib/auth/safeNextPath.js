// Post-login `next` targets must be same-origin relative paths. Reject
// absolute URLs ("https://evil"), protocol-relative ("//evil") and
// backslash ("/\evil") values that browsers resolve cross-origin, so the
// OAuth flow can never be turned into an open redirect.
export function safeNextPath(next) {
  const fallback = '/dashboard'

  if (typeof next !== 'string' || !next.startsWith('/')) return fallback

  if (next.startsWith('//') || next.startsWith('/\\')) return fallback

  return next
}
