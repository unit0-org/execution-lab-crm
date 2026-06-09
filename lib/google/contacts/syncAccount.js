import { GoogleAccount } from '../models/GoogleAccount'
import { getAccessToken } from '../getAccessToken'
import { listPeople } from './listPeople'
import { reconcilePerson } from './reconcilePerson'
import { pushNewContacts } from './pushNewContacts'

const save = (account, token) => GoogleAccount.update(
  { contacts_sync_token: token, contacts_synced_at: new Date() },
  { where: { id: account.id } }
)

// Pull, reconcile, optionally push new contacts, then persist the
// fresh sync token. Returns how many people were imported.
export async function syncAccount(account) {
  const token = await getAccessToken(account.refresh_token)
  const res = await listPeople(token, account.contacts_sync_token)

  for (const person of res.people)
    await reconcilePerson(account, token, person)

  if (account.is_primary) await pushNewContacts(account, token)

  await save(account, res.nextSyncToken)

  return res.people.length
}
