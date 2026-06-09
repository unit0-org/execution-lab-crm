// The shareable acceptance link for an invite token, resolved against the
// current site origin (empty during server render).
export function joinUrl(token) {
  const origin = typeof window === 'undefined' ? '' : window.location.origin

  return `${origin}/join/${token}`
}
