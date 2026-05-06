// Resolve the public origin for OAuth redirects.
export function siteOrigin(headersList) {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  const host = headersList?.get('host')
  return host ? `https://${host}` : 'http://localhost:3000'
}

export const redirectUri = (origin) => `${origin}/api/google/callback`
