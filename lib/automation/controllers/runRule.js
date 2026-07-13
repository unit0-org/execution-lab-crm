import { matchesConfig } from './matchesConfig'
import { runAction } from './runAction'
import { recordRun } from './recordRun'

// Apply one rule to the trigger context: skip when its filter doesn't match,
// otherwise run the action and log the outcome.
export async function runRule(rule, triggerType, ctx) {
  if (!matchesConfig(rule, ctx)) return

  const outcome = await runAction(rule, ctx)
  await recordRun(rule.id, triggerType, outcome)
}
