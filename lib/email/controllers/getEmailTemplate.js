import { EmailTemplate } from '../models'

// One org template by key, or null when absent.
export async function getEmailTemplate(organizationId, key) {
  const row = await EmailTemplate.findOne({
    where: { organization_id: organizationId, template_key: key }
  })

  return row ? row.toJSON() : null
}
