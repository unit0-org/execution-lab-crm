import { listPortalMembers } from '@/lib/portalMember/controllers'
import { PortalMembersTable } from './components/PortalMembersTable'

// Admin oversight of portal members: who has access, with revoke. Invites
// are sent from a contact's page (members must already be contacts).
export async function PortalMembersServer() {
  const members = await listPortalMembers()

  return <PortalMembersTable members={members} />
}
