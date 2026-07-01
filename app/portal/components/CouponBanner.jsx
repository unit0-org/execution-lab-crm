import { Badge } from '@/ui/atoms/Badge'

// Confirms a valid ?code= coupon is applied; nothing without one.
export function CouponBanner({ code }) {
  if (!code) return null

  return <Badge tone="accent">Coupon {code} applied</Badge>
}
