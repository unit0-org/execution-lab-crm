import { PortalServer } from './PortalServer'

// Always render live: cohort status/availability must reflect the CRM at
// once (Story 1.2), and pricing is fetched fresh from Stripe.
export const dynamic = 'force-dynamic'

export default function PortalPage() {
  return <PortalServer />
}
