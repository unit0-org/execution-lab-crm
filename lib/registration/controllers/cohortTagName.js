import { cohortMonthRank } from './cohortMonthRank'

// A consistent tag like "cohort-202606-02": YYYYMM from the cohort's
// start_date, then its 1-based rank among same-month org cohorts.
export async function cohortTagName(organizationId, cohort) {
  const [year, month] = String(cohort.start_date).split('-')
  const yearMonth = `${year}-${month}`
  const rank = await cohortMonthRank(organizationId, cohort, yearMonth)
  const suffix = String(rank).padStart(2, '0')

  return `cohort-${year}${month}-${suffix}`
}
