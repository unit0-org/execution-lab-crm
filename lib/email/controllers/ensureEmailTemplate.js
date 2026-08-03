import { EmailTemplate } from '../models'
import { DEFAULT_TEMPLATES } from './defaultTemplates'

const seedFor = (key) =>
  DEFAULT_TEMPLATES.find((tpl) => tpl.template_key === key)

// One template by key, seeded from the defaults the first time it is
// needed. Rendering or sending an email asks for a single template, so it
// costs a single query — reading (and seeding) all of them first put a
// round-trip per template in front of every email we send.
export async function ensureEmailTemplate(key) {
  const row = await EmailTemplate.findOne({ where: { template_key: key } })

  if (row) return row.toJSON()

  const seed = seedFor(key)

  if (!seed) return null

  const [created] = await EmailTemplate.findOrCreate({
    where: { template_key: key },
    defaults: { ...seed }
  })

  return created.toJSON()
}
