import { ensureDigestSetting } from './ensureDigestSetting'

// An organization's digest configuration, as a plain object.
export async function getDigestSetting(organizationId) {
  const row = await ensureDigestSetting(organizationId)

  return row.toJSON()
}
