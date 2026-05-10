import { createTask } from '@/lib/google/tasks/createTask'
import { getOrCreateListId } from './getListId'
import { buildTaskTitle } from './buildTaskTitle'
import { dueFromHint } from './dueDate'

const insertActionItem = (supabase, card, due) => {
  if (!card.contact_id) return null

  return supabase.from('action_items').insert({
    contact_id: card.contact_id,
    text:       card.effective.text,
    due_at:     due ? due.split('T')[0] : null,
    source:     card.meeting_id ? 'parsed' : 'manual',
  })
}

export async function routeActionItem(supabase, card, owner) {
  const listId = await getOrCreateListId(supabase, owner.account, owner.accessToken)
  const due    = dueFromHint(card.effective.dueHint)
  const title  = buildTaskTitle(card.effective.text, card.contacts?.display_name, card.meetings?.started_at)
  await createTask(owner.accessToken, listId, { title, due })
  await insertActionItem(supabase, card, due)
}
