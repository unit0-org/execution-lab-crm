import { ensureDigestSetting } from './ensureDigestSetting'

// Update an organization's digest configuration.
export async function saveDigestSetting(organizationId, data) {
  const row = await ensureDigestSetting(organizationId)

  await row.update(data)

  return row.toJSON()
}
