import { AutomationRun } from '../models'

// Append a row to the run log (observability for the Actions page).
export function recordRun(automationId, triggerType, outcome) {
  return AutomationRun.create({
    automation_id: automationId,
    trigger_type: triggerType,
    status: outcome.status,
    detail: outcome.detail
  })
}
