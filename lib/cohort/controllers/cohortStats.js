import { fn, col } from 'sequelize'
import { Registration } from '../../registration/models'
import { toStatsMap } from './toStatsMap'

// Per-cohort filled head count and revenue (cents). "Filled" counts every
// confirmed (seat-holding) registration via the model scope; revenue still
// sums only paid rows, whose amount_total is the only one ever set.
export function cohortStats() {
  return Registration.scope('confirmed').findAll({
    attributes: [
      'cohort_id',
      [fn('count', col('id')), 'filled'],
      [fn('coalesce', fn('sum', col('amount_total')), 0), 'revenue']
    ],
    group: ['cohort_id'],
    raw: true
  }).then(toStatsMap)
}
