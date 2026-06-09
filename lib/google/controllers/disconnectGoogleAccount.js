import { GoogleAccount } from '../models/GoogleAccount'

// Remove one of the org's connected Google accounts. The FK cascade
// clears its contact links and conflicts.
export async function disconnectGoogleAccount(organizationId, id) {
  await GoogleAccount.destroy({
    where: { organization_id: organizationId, id }
  })

  return { ok: true }
}
