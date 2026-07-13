import { Automation } from '../models'
import { runRule } from './runRule'

// Fire every active automation for a trigger. Best-effort by design:
// automations must never break the operation that triggered them, so every
// error is swallowed (and logged), never rethrown.
export async function dispatchTrigger(triggerType, ctx) {
  try {
    const rules = await Automation.activeForTrigger(triggerType)

    for (const rule of rules) await runRule(rule, triggerType, ctx)
  } catch (e) {
    console.error('automation dispatch failed', triggerType, e)
  }
}
