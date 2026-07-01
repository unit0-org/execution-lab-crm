import { currentPortalMember } from '@/lib/portalMember/controllers'
import { listResourcesForMember, listAllResources }
  from '@/lib/cohort/controllers'
import { ResourcesView } from './components/ResourcesView'

const cohortsFor = (member) =>
  member.isOwner
    ? listAllResources()
    : listResourcesForMember(member.contactId)

// Member resources: the cohorts they hold a confirmed seat in, each with
// its notes, resources and recordings. An owner sees every cohort. The
// shell gate guarantees a member.
export async function ResourcesServer() {
  const member = await currentPortalMember()
  const cohorts = member ? await cohortsFor(member) : []

  return <ResourcesView cohorts={cohorts} />
}
