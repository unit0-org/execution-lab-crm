import { EmailTemplate } from '../models'

// Edit a template's subject + body. Applies to future sends only,
// since we read the template fresh at send time.
export async function updateEmailTemplate(key, subject, body) {
  await EmailTemplate.update(
    { subject, body, updated_at: new Date() },
    { where: { template_key: key } }
  )

  return { ok: true }
}
