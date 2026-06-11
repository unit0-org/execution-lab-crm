import { Op } from 'sequelize'
import { cohortSlugBase } from './cohortSlugBase'

const pad = (n) => String(n).padStart(2, '0')

function nextSlug(base, taken) {
  if (!taken.has(base)) return base

  let n = 2

  while (taken.has(`${base}-${pad(n)}`)) n += 1

  return `${base}-${pad(n)}`
}

// beforeCreate hook: assign a stable, shareable slug (2026-june,
// 2026-june-02, ...), disambiguating cohorts that start the same month.
export async function assignCohortSlug(cohort) {
  if (cohort.slug) return

  const base = cohortSlugBase(cohort.start_date)
  const rows = await cohort.constructor.findAll({
    where: { slug: { [Op.startsWith]: base } },
    attributes: ['slug']
  })

  cohort.slug = nextSlug(base, new Set(rows.map((r) => r.slug)))
}
