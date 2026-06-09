import { Meeting } from '../models'

// True when both meeting ids belong to the given organization.
export async function verifyMeetingsInOrg(organizationId, ids, t) {
  const count = await Meeting.count({
    where: { id: ids, organization_id: organizationId },
    transaction: t
  })

  return count === ids.length
}
