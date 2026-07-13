import { Automation } from '../models'

// Every automation, newest first, as plain objects.
export async function listAutomations() {
  const rows = await Automation.findAll({
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => row.toJSON())
}
