import { listMembersAction } from './actions/listMembers'
import { SettingsView } from './components/SettingsView'

// Server-side load for the members tab.
export async function MembersServer({ organizationId }) {
  const members = await listMembersAction(organizationId)

  return <SettingsView members={members} organizationId={organizationId} />
}
