import { GoogleAccount } from '../models/GoogleAccount'
import { getAccessToken } from '../getAccessToken'
import { listPeople } from './listPeople'
import { reconcilePerson } from './reconcilePerson'
import { pushNewContacts } from './pushNewContacts'
import { writeBudget } from './writeBudget'

const save = (account, token) => GoogleAccount.update(
  { contacts_sync_token: token, contacts_synced_at: new Date() },
  { where: { id: account.id } }
)

// Pull and reconcile, pushing back to Google within a per-run write
// budget; only advance the sync token once a run finishes inside that
// budget, so the import converges over runs without ever timing out.
export async function syncAccount(account) {
  const token = await getAccessToken(account.refresh_token)
  const res = await listPeople(token, account.contacts_sync_token)
  const budget = writeBudget()

  for (const person of res.people)
    await reconcilePerson(account, token, person, budget)

  if (account.is_primary) await pushNewContacts(account, token, budget)

  if (!budget.exhausted()) await save(account, res.nextSyncToken)

  return res.people.length
}
