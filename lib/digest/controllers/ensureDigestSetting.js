import { DigestSetting } from '../models'

// The org's digest settings row, created with defaults if missing.
export async function ensureDigestSetting(organizationId) {
  const [row] = await DigestSetting.findOrCreate({
    where: { organization_id: organizationId }
  })

  return row
}
