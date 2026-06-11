import { portalOrganizationId } from '@/lib/portal/portalOrganizationId'
import { cohortCardData } from '@/lib/portal/cohortCardData'
import { waitlistOptions } from '../components/waitlistOptions'
import { WaitlistJoin } from '../components/WaitlistJoin'

// Load the joinable cohorts for the waitlist picker; preselect from the
// ?cohort= link (set by a cohort's "Join waitlist" CTA).
export async function WaitlistServer({ searchParams }) {
  const orgId = portalOrganizationId()
  const cards = orgId ? await cohortCardData(orgId) : []
  const { cohort } = await searchParams

  return <WaitlistJoin cohorts={waitlistOptions(cards)} selected={cohort} />
}
