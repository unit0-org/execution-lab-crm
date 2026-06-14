import { GoogleAccount } from '../models/GoogleAccount'

// Remove one connected Google account. The FK cascade clears its
// contact links and conflicts.
export async function disconnectGoogleAccount(id) {
  await GoogleAccount.destroy({
    where: { id }
  })

  return { ok: true }
}
