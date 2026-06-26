import { listPortalMembers } from '@/lib/portalMember/controllers'
import { listContacts } from '@/lib/contact/controllers/list'
import { toolAccessByContacts } from '@/lib/portalTool/controllers'
import { PORTAL_TOOLS } from '@/lib/portalTool/tools'
import { PortalMembersView } from './components/PortalMembersView'
import { toContactOptions } from './hooks/contactOptions'
import { withToolKeys } from './hooks/withToolKeys'

// Portal members admin: who has access, with invite, revoke and per-member
// tool toggles. Loads contacts for the invite picker and each member's
// granted tool keys for the Tools column.
export async function PortalMembersPageServer() {
  const members = await listPortalMembers()
  const access = await toolAccessByContacts(members.map((m) => m.contactId))
  const contacts = toContactOptions(await listContacts())

  return <PortalMembersView members={withToolKeys(members, access)}
    tools={PORTAL_TOOLS} contacts={contacts} />
}
