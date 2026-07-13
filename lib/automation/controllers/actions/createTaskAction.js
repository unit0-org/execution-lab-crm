import { createTask } from '@/lib/contact/controllers/createTask'
import { resolveContactId } from './resolveContactId'
import { dueDateFromDays } from './dueDateFromDays'

// Create a follow-up task on the triggering contact (resolved from the
// context email when the trigger carried no contact id).
export async function createTaskAction(config, ctx) {
  const contactId = ctx.contactId || await resolveContactId(ctx.email)

  if (!contactId) return { status: 'skipped', detail: 'no contact' }

  const due = dueDateFromDays(config.dueInDays)
  await createTask(contactId, config.title, due)

  return { status: 'ran', detail: `task "${config.title}"` }
}
