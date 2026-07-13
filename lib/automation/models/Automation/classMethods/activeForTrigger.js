// Active automations for a trigger type, via the `active` scope. Runs on
// the model, so `this` is Automation.
export function activeForTrigger(triggerType) {
  return this.scope('active').findAll({
    where: { trigger_type: triggerType }
  })
}
