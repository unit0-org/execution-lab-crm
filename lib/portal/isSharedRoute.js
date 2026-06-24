const SHARED_PREFIXES = ['/auth', '/api']

// Paths that serve from the root app tree even on the portal host — the
// auth callback / sign-out and API routes — so they are never rewritten
// under /portal (where they don't exist).
export function isSharedRoute(pathname) {
  return SHARED_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}
