import { Text } from '@/ui/atoms/Text'
import { portalOrganizationId } from '@/lib/portal/portalOrganizationId'
import { cohortCardData } from '@/lib/portal/cohortCardData'
import { CohortGrid } from './components/CohortGrid'

// Server-side load of the org's open cohorts for the public portal.
export async function PortalServer() {
  const orgId = portalOrganizationId()

  if (!orgId) {
    return <Text tone="muted">Cohorts are not available right now.</Text>
  }

  const cohorts = await cohortCardData(orgId)

  return <CohortGrid cohorts={cohorts} />
}
