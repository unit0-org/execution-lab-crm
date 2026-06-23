import { Link } from '@/ui/atoms/Link'

// The secondary path under a register CTA — present only on register states.
export function WaitlistLink({ href }) {
  if (!href) return null

  return <Link href={href}>or join the waitlist</Link>
}
