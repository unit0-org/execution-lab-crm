import { Op } from 'sequelize'
import { Cohort } from '@/lib/cohort/models'
import { monthRange } from './monthRange'

// 1-based position of a cohort among cohorts whose start_date
// falls in the same year-month, ordered by created_at ascending.
export async function cohortMonthRank(cohort, yearMonth) {
  const { start, end } = monthRange(yearMonth)
  const rows = await Cohort.findAll({
    where: {
      start_date: { [Op.gte]: start, [Op.lt]: end }
    },
    order: [['created_at', 'ASC']]
  })

  return rows.findIndex((row) => row.id === cohort.id) + 1
}
