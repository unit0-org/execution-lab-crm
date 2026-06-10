import { fn, col } from 'sequelize'
import { Registration } from '../../registration/models'
import { toStatsMap } from './toStatsMap'

// Per-cohort paid head count and revenue (cents) for an org.
export function cohortStats(organizationId) {
  return Registration.findAll({
    where: { organization_id: organizationId, status: 'paid' },
    attributes: [
      'cohort_id',
      [fn('count', col('id')), 'filled'],
      [fn('coalesce', fn('sum', col('amount_total')), 0), 'revenue']
    ],
    group: ['cohort_id'],
    raw: true
  }).then(toStatsMap)
}
