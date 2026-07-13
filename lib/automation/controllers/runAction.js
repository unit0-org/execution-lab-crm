import { sendEmailAction } from './actions/sendEmailAction'
import { createTaskAction } from './actions/createTaskAction'

const RUNNERS = {
  send_email: sendEmailAction,
  create_task: createTaskAction
}

// Execute a rule's action; returns { status, detail } for the run log.
export function runAction(rule, ctx) {
  const run = RUNNERS[rule.action_type]

  if (!run) return { status: 'skipped', detail: 'unknown action' }

  return run(rule.action_config || {}, ctx)
}
