// The origin to build OAuth redirect URIs from.
export function connectOrigin(request) {
  return process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin
}

// Where Google sends the user back after consent.
export function redirectUri(origin) {
  return `${origin}/api/google/connect/callback`
}
