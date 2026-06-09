import { GoogleAccount } from '../models/GoogleAccount'

// Upsert the org's Google account for this email, storing the refresh
// token. The org's first connected account becomes the primary.
export async function connectGoogleAccount(organizationId, email, token) {
  const count = await GoogleAccount.count({
    where: { organization_id: organizationId }
  })
  const [account, created] = await GoogleAccount.findOrCreate({
    where: { organization_id: organizationId, email },
    defaults: {
      organization_id: organizationId,
      email,
      refresh_token: token,
      is_primary: count === 0
    }
  })

  if (!created) await account.update({ refresh_token: token })

  return account.toJSON()
}
