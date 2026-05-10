// Lazy-create the "CRM Follow-ups" list per account and cache the id
// on google_accounts.tasks_list_id.
import { ensureFollowUpsList } from '@/lib/google/tasks/lists'

export async function getOrCreateListId(supabase, account, accessToken) {
  if (account.tasks_list_id) return account.tasks_list_id
  const id = await ensureFollowUpsList(accessToken)
  await supabase.from('google_accounts').update({ tasks_list_id: id }).eq('id', account.id)

  return id
}
