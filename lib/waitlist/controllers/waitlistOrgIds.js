import { Op } from 'sequelize'
import { WaitlistEntry } from '../models'

// Distinct orgs with live waitlist activity — the ones the cron advances.
export async function waitlistOrgIds() {
  const rows = await WaitlistEntry.findAll({
    where: { status: { [Op.in]: ['waiting', 'invited'] } },
    attributes: ['organization_id'],
    group: ['organization_id'],
    raw: true
  })

  return rows.map((row) => row.organization_id)
}
