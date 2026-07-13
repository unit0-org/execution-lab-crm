import { sendTemplatedEmail } from '@/lib/email/controllers/sendTemplatedEmail'
import { resolveEmail } from './resolveEmail'

// Email the person in the trigger context, resolving a recipient from the
// context's contact when the trigger carried no email.
export async function sendEmailAction(config, ctx) {
  const email = ctx.email || await resolveEmail(ctx.contactId)

  if (!email) return { status: 'skipped', detail: 'no recipient' }

  const vars = ctx.vars || {}
  const result = await sendTemplatedEmail(config.templateKey, email, vars)

  if (result?.skipped) return { status: 'skipped', detail: 'send skipped' }

  return { status: 'ran', detail: `emailed ${email}` }
}
