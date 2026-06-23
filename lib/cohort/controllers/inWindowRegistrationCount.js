import { Op } from 'sequelize'
import { Registration } from '../../registration/models'
import { opensOn } from './registrationWindow'

// How many seats a cohort has taken since its registration window opened
// (pending or paid). Pre-registrations made before the window don't count,
// so they never use up the first-2-seats early-bird allowance.
export function inWindowRegistrationCount(cohort) {
  return Registration.count({
    where: {
      cohort_id: cohort.id,
      status: ['pending', 'paid'],
      created_at: { [Op.gte]: opensOn(cohort) }
    }
  })
}
