'use server'

import { revalidatePath } from 'next/cache'
import { withAdmin } from '@/lib/auth/withAdmin'
import { getContact } from '@/lib/contact/controllers/get'
import { invitePortalMember, sendPortalInvite }
  from '@/lib/portalMember/controllers'

// Invite a contact to the member portal and email them a sign-in link.
// Needs an email to match sign-in against — refuse rather than orphan a row.
export const inviteToPortalAction = withAdmin(async (orgId, formData) => {
  const id = formData.get('id')
  const contact = await getContact(id)

  if (!contact?.contact_email?.length)
    return { error: 'Add an email to this contact first' }

  await invitePortalMember(id)
  await sendPortalInvite(id)
  revalidatePath(`/contacts/${id}`)

  return { ok: true }
})
