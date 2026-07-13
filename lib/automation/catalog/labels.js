import { TRIGGERS } from './triggers'
import { ACTIONS } from './actions'

const labelOf = (list, value) =>
  list.find((item) => item.value === value)?.label || value

export const triggerLabel = (value) => labelOf(TRIGGERS, value)
export const actionLabel = (value) => labelOf(ACTIONS, value)

// The human name shown for a rule, e.g. "When a contact is created, send…".
export const automationName = (triggerType, actionType) =>
  `When ${triggerLabel(triggerType)}, ${actionLabel(actionType)}.`
