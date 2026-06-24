import { portalPublicOrigin } from '@/lib/portal/portalPublicOrigin'

// The portal sign-in callback URL: the shared /auth/callback on the
// portal's public origin, tagged flow=portal so the callback skips the
// staff-only Google token capture and lands on `next`.
export function portalCallbackUrl(next) {
  const base = `${portalPublicOrigin()}/auth/callback`

  return `${base}?next=${encodeURIComponent(next)}&flow=portal`
}
