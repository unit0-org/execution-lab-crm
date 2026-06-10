import { EmailTemplate } from '../models'
import { DEFAULT_TEMPLATES } from './defaultTemplates'

// Seed any missing default templates for the org, then return all of
// them ordered by template_key as plain objects.
export async function ensureEmailTemplates(organizationId) {
  for (const tpl of DEFAULT_TEMPLATES)
    await EmailTemplate.findOrCreate({
      where: {
        organization_id: organizationId,
        template_key: tpl.template_key
      },
      defaults: { ...tpl, organization_id: organizationId }
    })

  const rows = await EmailTemplate.findAll({
    where: { organization_id: organizationId },
    order: [['template_key', 'ASC']]
  })

  return rows.map((row) => row.toJSON())
}
