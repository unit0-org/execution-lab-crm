import { Op } from 'sequelize'
import { Registration } from '../../registration/models'
import { opensOn } from './registrationWindow'

// How many seats a cohort has taken since its registration window opened —
// confirmed registrations only (model scope). Pre-registrations made before
// the window don't count, so they never use the first-2-seats allowance.
export function inWindowRegistrationCount(cohort) {
  return Registration.scope('confirmed').count({
    where: {
      cohort_id: cohort.id,
      created_at: { [Op.gte]: opensOn(cohort) }
    }
  })
}
