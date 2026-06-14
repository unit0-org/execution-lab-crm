import { EmailTemplate } from '../models'

// One template by key, or null when absent.
export async function getEmailTemplate(key) {
  const row = await EmailTemplate.findOne({
    where: { template_key: key }
  })

  return row ? row.toJSON() : null
}
