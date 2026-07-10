import { sendEmail } from '@/lib/email/sendEmail'
import { resendApiKey } from '@/lib/email/controllers/resendApiKey'
import { fromLine } from '@/lib/email/controllers/fromLine'
import { renderDigestHtml } from '../renderer/renderDigestHtml'
import { digestSubject } from './digestSubject'

// Send the rendered digest to the given recipients through Resend.
export function deliverDigest(recipients, digest) {
  return sendEmail(resendApiKey(), {
    from: fromLine(),
    to: recipients,
    subject: digestSubject(),
    html: renderDigestHtml(digest)
  })
}
