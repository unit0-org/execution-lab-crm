import { syncAccount } from './syncAccount'

// Sync one account, capturing any failure as a per-account error
// message instead of aborting the whole org run.
export async function syncAccountSafely(account) {
  try {
    const imported = await syncAccount(account)

    return { imported, error: null }
  } catch (err) {
    return { imported: 0, error: `${account.email}: ${err.message}` }
  }
}
