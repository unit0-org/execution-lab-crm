import { Automation } from '../models'

// Patch an automation (today only the active toggle).
export function updateAutomation(id, data) {
  return Automation.update(data, { where: { id } })
}
