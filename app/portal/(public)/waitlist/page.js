import { WaitlistServer } from './WaitlistServer'

// Live cohort availability drives the picker; resolve it per request.
export const dynamic = 'force-dynamic'

export default function WaitlistPage({ searchParams }) {
  return <WaitlistServer searchParams={searchParams} />
}
