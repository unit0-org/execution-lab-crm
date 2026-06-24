import { cohortCardData } from '@/lib/portal/cohortCardData'
import { waitlistOptions } from '../../components/waitlistOptions'
import { waitlistPricing } from '../../components/waitlistPricing'
import { WaitlistJoin } from '../../components/WaitlistJoin'

// Load the joinable cohorts + program price for the waitlist picker; preselect
// from the ?cohort= link (set by a cohort's "Join waitlist" CTA).
export async function WaitlistServer({ searchParams }) {
  const cards = await cohortCardData()
  const { cohort } = await searchParams

  return (
    <WaitlistJoin cohorts={waitlistOptions(cards)} selected={cohort}
      pricing={waitlistPricing(cards, cohort)} />
  )
}
