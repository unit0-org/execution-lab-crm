import { ExternalLink } from '@/ui/atoms/ExternalLink'

// Wrap an amount in a link to its Stripe transaction when we have one, else
// render it as plain text.
export function AmountLink({ href, children }) {
  if (!href) return children

  return <ExternalLink href={href}>{children}</ExternalLink>
}
