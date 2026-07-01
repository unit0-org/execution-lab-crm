import { currentPortalMember } from '@/lib/portalMember/controllers'
import { listToolsForMember } from '@/lib/portalTool/controllers'
import { PORTAL_TOOLS } from '@/lib/portalTool/tools'
import { ToolsView } from './components/ToolsView'

const toolsFor = (member) =>
  member.isOwner ? PORTAL_TOOLS : listToolsForMember(member.contactId)

// The tools a member has been granted. An owner sees every tool. The shell
// gate guarantees a member; per-member access is granted in the CRM admin.
export async function ToolsServer() {
  const member = await currentPortalMember()
  const tools = member ? await toolsFor(member) : []

  return <ToolsView tools={tools} />
}
