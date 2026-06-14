import { Cohort } from '../models'

// One cohort as a plain object, or null when not found.
export function getCohort(id) {
  return Cohort.findOne({
    where: { id }
  }).then((row) => (row ? row.toJSON() : null))
}
