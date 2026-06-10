// Absolute origin for portal URLs (Stripe needs absolute success/cancel).
export function siteOrigin() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}
