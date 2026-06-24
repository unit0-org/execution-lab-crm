import { cohortCardData } from '@/lib/portal/cohortCardData'
import { PortalBody } from '../components/PortalBody'

// Server-side load of the open cohorts for the public portal.
export async function PortalServer() {
  const cohorts = await cohortCardData()

  return <PortalBody cohorts={cohorts} />
}
