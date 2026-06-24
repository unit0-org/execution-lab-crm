import { getContact } from '@/lib/contact/controllers/get'
import { resendApiKey } from '@/lib/email/controllers/resendApiKey'
import { fromLine } from '@/lib/email/controllers/fromLine'
import { textToHtml } from '@/lib/email/controllers/textToHtml'
import { sendEmail } from '@/lib/email/sendEmail'
import { portalInviteBody } from './portalInviteBody'

// Email an invited contact a link to sign in to the member portal. The
// recipient is read from the contact (no email is stored on portal_member);
// no-ops when the contact has no email or no Resend key is set.
export async function sendPortalInvite(contactId) {
  const contact = await getContact(contactId)
  const to = contact?.contact_email?.[0]?.email
  const key = resendApiKey()

  if (!to || !key) return { skipped: true }

  return sendEmail(key, {
    from: fromLine(), to, subject: 'Your Execution Lab portal access',
    html: textToHtml(portalInviteBody(contact.full_name, to))
  })
}
