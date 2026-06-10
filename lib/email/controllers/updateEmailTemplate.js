import { EmailTemplate } from '../models'

// Edit a template's subject + body. Applies to future sends only,
// since we read the template fresh at send time.
export async function updateEmailTemplate(organizationId, key, subject, body) {
  await EmailTemplate.update(
    { subject, body, updated_at: new Date() },
    { where: { organization_id: organizationId, template_key: key } }
  )

  return { ok: true }
}
