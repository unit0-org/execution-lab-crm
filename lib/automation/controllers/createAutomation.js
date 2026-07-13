import { Automation } from '../models'

// Create an automation from a normalized builder payload.
export async function createAutomation(data) {
  const row = await Automation.create({
    name: data.name,
    trigger_type: data.triggerType,
    trigger_config: data.triggerConfig || {},
    action_type: data.actionType,
    action_config: data.actionConfig || {}
  })

  return row.toJSON()
}
