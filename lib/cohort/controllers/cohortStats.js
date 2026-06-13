import { fn, col } from 'sequelize'
import { Registration } from '../../registration/models'
import { toStatsMap } from './toStatsMap'

// Per-cohort filled head count and revenue (cents) for an org. A spot is
// taken once registered (pending or paid); revenue still sums only paid
// rows, whose amount_total is the only one ever set.
export function cohortStats(organizationId) {
  return Registration.findAll({
    where: {
      organization_id: organizationId,
      status: ['pending', 'paid']
    },
    attributes: [
      'cohort_id',
      [fn('count', col('id')), 'filled'],
      [fn('coalesce', fn('sum', col('amount_total')), 0), 'revenue']
    ],
    group: ['cohort_id'],
    raw: true
  }).then(toStatsMap)
}
