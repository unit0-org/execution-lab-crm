import { enabledAccounts } from './enabledAccounts'
import { syncAccountSafely } from './syncAccountSafely'
import { openConflictCount } from './openConflictCount'

// Sync every contacts-enabled Google account. Returns a summary of
// accounts, people imported, new conflicts and per-account errors (one
// bad account never aborts the others).
export async function syncContacts() {
  const accounts = await enabledAccounts()
  const before = await openConflictCount()
  const errors = []
  let imported = 0

  for (const account of accounts) {
    const result = await syncAccountSafely(account)
    imported += result.imported

    if (result.error) errors.push(result.error)
  }

  const conflicts = await openConflictCount() - before

  return { accounts: accounts.length, imported, conflicts, errors }
}
