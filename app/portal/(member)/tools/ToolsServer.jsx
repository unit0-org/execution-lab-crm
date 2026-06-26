import { currentPortalMember } from '@/lib/portalMember/controllers'
import { listToolsForMember } from '@/lib/portalTool/controllers'
import { ToolsView } from './components/ToolsView'

// The tools a member has been granted. The shell gate guarantees a member;
// access to each tool is granted per member in the CRM admin.
export async function ToolsServer() {
  const member = await currentPortalMember()
  const tools = member
    ? await listToolsForMember(member.contactId)
    : []

  return <ToolsView tools={tools} />
}
