import { Automation } from '../models'

// Permanently remove an automation (its run log cascades away).
export function deleteAutomation(id) {
  return Automation.destroy({ where: { id } })
}
