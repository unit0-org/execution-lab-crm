import { Op } from 'sequelize'
import { Registration } from '@/lib/registration/models'
import { stillHeld } from '@/lib/registration/models/heldPredicate'

// The live reservation for a cohort+id, or null. Deliberately goes through
// the same held predicate as the confirmed scope: the claim is worth
// exactly as long as the seat is really being held, so a lapsed or
// cancelled reservation stops opening doors the moment its seat is gone.
export async function findHeldReservation(cohortId, registrationId) {
  const row = await Registration.findOne({
    where: {
      [Op.and]: [
        { id: registrationId, cohort_id: cohortId, status: 'pending' },
        { reserved_at: { [Op.ne]: null } },
        stillHeld
      ]
    }
  })

  return row ? row.toJSON() : null
}
