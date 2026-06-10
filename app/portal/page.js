import { Suspense } from 'react'
import { PortalServer } from './PortalServer'
import { PortalFallback } from './components/PortalFallback'

// Always render live: cohort status/availability must reflect the CRM at
// once (Story 1.2), and pricing is fetched fresh from Stripe.
export const dynamic = 'force-dynamic'

export default function PortalPage() {
  return (
    <Suspense fallback={<PortalFallback />}>
      <PortalServer />
    </Suspense>
  )
}
