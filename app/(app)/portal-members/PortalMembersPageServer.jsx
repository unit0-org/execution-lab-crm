import { listPortalMembers } from '@/lib/portalMember/controllers'
import { listContacts } from '@/lib/contact/controllers/list'
import { PortalMembersView } from './components/PortalMembersView'
import { toContactOptions } from './hooks/contactOptions'

// Portal members admin: who has access, with invite + revoke. Loads
// contacts for the invite picker (members must already be contacts).
export async function PortalMembersPageServer() {
  const members = await listPortalMembers()
  const contacts = toContactOptions(await listContacts())

  return <PortalMembersView members={members} contacts={contacts} />
}
