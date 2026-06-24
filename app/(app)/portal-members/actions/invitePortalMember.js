'use server'

import { revalidatePath } from 'next/cache'
import { withAdmin } from '@/lib/auth/withAdmin'
import { getContact } from '@/lib/contact/controllers/get'
import { invitePortalMember, sendPortalInvite }
  from '@/lib/portalMember/controllers'

// Invite a contact to the portal and email them a sign-in link. Needs an
// email to match sign-in against — refuse rather than orphan a row.
export const invitePortalMemberAction = withAdmin(async (orgId, contactId) => {
  const contact = await getContact(contactId)

  if (!contact?.contact_email?.length)
    return { error: 'Add an email to this contact first' }

  await invitePortalMember(contactId)
  await sendPortalInvite(contactId)
  revalidatePath('/portal-members')

  return { ok: true }
})
