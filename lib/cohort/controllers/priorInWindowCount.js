import { Op } from 'sequelize'
import { Registration } from '../../registration/models'
import { opensOn } from './registrationWindow'

// In-window seats taken strictly before this registration — decides whether
// it was among the first 2 to earn the early-bird reward. Based on when they
// registered (created_at), so it's stable across payment retries.
export function priorInWindowCount(cohort, registration) {
  return Registration.count({
    where: {
      cohort_id: cohort.id,
      status: ['pending', 'paid'],
      created_at: {
        [Op.gte]: opensOn(cohort),
        [Op.lt]: registration.created_at
      }
    }
  })
}
