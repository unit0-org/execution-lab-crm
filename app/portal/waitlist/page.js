import { Suspense } from 'react'
import { WaitlistServer } from './WaitlistServer'
import { PortalFallback } from '../components/PortalFallback'

// Live cohort availability drives the picker; resolve it per request.
export const dynamic = 'force-dynamic'

export default function WaitlistPage({ searchParams }) {
  return (
    <Suspense fallback={<PortalFallback />}>
      <WaitlistServer searchParams={searchParams} />
    </Suspense>
  )
}
