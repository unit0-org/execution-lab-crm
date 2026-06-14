import { EmailTemplate } from '../models'
import { DEFAULT_TEMPLATES } from './defaultTemplates'

// Seed any missing default templates, then return all of
// them ordered by template_key as plain objects.
export async function ensureEmailTemplates() {
  for (const tpl of DEFAULT_TEMPLATES)
    await EmailTemplate.findOrCreate({
      where: {
        template_key: tpl.template_key
      },
      defaults: { ...tpl }
    })

  const rows = await EmailTemplate.findAll({
    order: [['template_key', 'ASC']]
  })

  return rows.map((row) => row.toJSON())
}
