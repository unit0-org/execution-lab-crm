import { automationName } from '@/lib/automation/catalog/labels'
import { triggerConfig } from './triggerConfig'
import { actionConfig } from './actionConfig'

// Turn the builder form into a createAutomation payload.
export function formToAutomation(formData) {
  const triggerType = formData.get('triggerType') || ''
  const actionType = formData.get('actionType') || ''

  return {
    name: automationName(triggerType, actionType),
    triggerType,
    triggerConfig: triggerConfig(formData, triggerType),
    actionType,
    actionConfig: actionConfig(formData, actionType)
  }
}
