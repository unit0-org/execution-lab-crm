import { currentPortalMember } from '@/lib/portalMember/controllers'
import { getContact } from '@/lib/contact/controllers/get'
import { AccountView } from './AccountView'

// Member landing: greet by name. Billing, cohort notes and recordings
// arrive in later milestones; the gate (MemberShellServer) guarantees a
// member here, so this only resolves their name.
export async function AccountServer() {
  const member = await currentPortalMember()
  const contact = member ? await getContact(member.contactId) : null

  return <AccountView name={contact?.full_name} />
}
