import { Inline } from '@/ui/layout/Inline'
import { Link } from '@/ui/atoms/Link'

// Footer links to the public legal pages.
export function LandingFooter() {
  return (
    <Inline gap="md">
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms-of-service">Terms of Service</Link>
    </Inline>
  )
}
