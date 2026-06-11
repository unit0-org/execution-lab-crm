import { Op } from 'sequelize'
import { Cohort } from '@/lib/cohort/models'
import { cohortStats } from '@/lib/cohort/controllers'
import { WaitlistEntry } from '../models'
import { waitlistWave } from './waitlistWave'

// Position in line for the entry's cohort (people ahead + self) and which
// wave of 6 it lands in, after the seats already taken.
export async function waitlistStanding(organizationId, entry) {
  const cohort = await Cohort.findByPk(entry.cohort_id)

  if (!cohort) return { position: null, wave: null }

  const position = await WaitlistEntry.count({
    where: {
      organization_id: organizationId,
      cohort_id: entry.cohort_id,
      status: { [Op.ne]: 'converted' },
      created_at: { [Op.lte]: entry.created_at }
    }
  })
  const stats = await cohortStats(organizationId)
  const taken = (stats[entry.cohort_id] || { filled: 0 }).filled
  const remaining = Math.max(0, cohort.capacity - taken)

  return { position, wave: waitlistWave(position, remaining, cohort.capacity) }
}
