import { Op } from 'sequelize'
import { Cohort } from '@/lib/cohort/models'

// 1-based position of a cohort among cohorts whose start_date
// falls in the same year-month, ordered by created_at ascending.
export async function cohortMonthRank(cohort, yearMonth) {
  const rows = await Cohort.findAll({
    where: {
      start_date: { [Op.startsWith]: yearMonth }
    },
    order: [['created_at', 'ASC']]
  })

  return rows.findIndex((row) => row.id === cohort.id) + 1
}
