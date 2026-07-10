import { listMembers } from '@/lib/org/controllers/listMembers'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'

// Every staff member's email — the digest's audience. One send addresses
// them all.
export async function digestRecipients() {
  const organizationId = await firstOrganizationId()
  const members = await listMembers(organizationId)

  return members.map((member) => member.email).filter(Boolean)
}
