import { currentPortalMember } from '@/lib/portalMember/controllers'
import { listResourcesForMember } from '@/lib/cohort/controllers'
import { ResourcesView } from './components/ResourcesView'

// Member resources: the cohorts they hold a confirmed seat in, each with
// its notes, resources and recordings. The shell gate guarantees a member.
export async function ResourcesServer() {
  const member = await currentPortalMember()
  const cohorts = member
    ? await listResourcesForMember(member.contactId)
    : []

  return <ResourcesView cohorts={cohorts} />
}
