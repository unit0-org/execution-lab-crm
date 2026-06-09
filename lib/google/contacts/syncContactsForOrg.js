import { enabledAccounts } from './enabledAccounts'
import { syncAccount } from './syncAccount'
import { openConflictCount } from './openConflictCount'

// Sync every contacts-enabled Google account in the org. Returns a
// summary of accounts processed, people imported and new conflicts.
export async function syncContactsForOrg(organizationId) {
  const accounts = await enabledAccounts(organizationId)
  const before = await openConflictCount(organizationId)
  let imported = 0

  for (const account of accounts)
    imported += await syncAccount(account)

  const conflicts = await openConflictCount(organizationId) - before

  return { accounts: accounts.length, imported, conflicts }
}
