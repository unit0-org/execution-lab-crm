import { Op } from 'sequelize'
import { Registration } from '../../registration/models'
import { opensOn } from './registrationWindow'

// In-window seats taken strictly before this registration — confirmed
// registrations only (model scope). Decides whether it was among the first 2
// to earn the early-bird reward. Based on created_at, stable across retries.
export function priorInWindowCount(cohort, registration) {
  return Registration.scope('confirmed').count({
    where: {
      cohort_id: cohort.id,
      created_at: {
        [Op.gte]: opensOn(cohort),
        [Op.lt]: registration.created_at
      }
    }
  })
}
