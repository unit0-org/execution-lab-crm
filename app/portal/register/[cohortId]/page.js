import { Suspense } from 'react'
import { PortalFallback } from '../../components/PortalFallback'
import { RegisterServer } from './RegisterServer'

// Live render: cohort openness + seats must reflect the CRM at request
// time, and pricing is fetched fresh from Stripe.
export const dynamic = 'force-dynamic'

export default function RegisterPage({ params }) {
  return (
    <Suspense fallback={<PortalFallback />}>
      <RegisterServer params={params} />
    </Suspense>
  )
}
