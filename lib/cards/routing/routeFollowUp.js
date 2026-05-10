import { createTask } from '@/lib/google/tasks/createTask'
import { getOrCreateListId } from './getListId'
import { buildTaskTitle } from './buildTaskTitle'

const DAY = 86400000
const WINDOW_DAYS = { 'this-week': 7, 'two-weeks': 14, 'month': 30 }

const dueFromWindow = (w) => new Date(Date.now() + (WINDOW_DAYS[w] || 14) * DAY).toISOString()

const insertFlag = (supabase, card, due) =>
  supabase.from('follow_up_flags').insert({
    contact_id: card.contact_id,
    reason:     card.effective.reason || null,
    due_date:   due ? due.split('T')[0] : null,
  })

export async function routeFollowUp(supabase, card, owner) {
  const listId = await getOrCreateListId(supabase, owner.account, owner.accessToken)
  const due    = dueFromWindow(card.effective.suggestedWindow)
  const title  = buildTaskTitle(`Follow up: ${card.effective.reason || 'check in'}`,
    card.contacts?.display_name, null)
  await createTask(owner.accessToken, listId, { title, due })
  if (card.contact_id) await insertFlag(supabase, card, due)
}
