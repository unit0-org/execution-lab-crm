import { MonoLink } from '@/ui/atoms/MonoLink'

// A link out to the Stripe transaction for a payment, or null when there is
// no Stripe charge to open (unpaid or an out-of-band e-transfer).
export function stripeLink(url) {
  if (!url) return null

  return <MonoLink href={url}>View in Stripe</MonoLink>
}
