import { Op } from 'sequelize'
import { WaitlistEntry } from '../models'

// The live invite for a cohort+token, or null — used to prefill the
// register form and let the holder claim the freed seat (Story 3.2).
export async function findInvite(organizationId, cohortId, token) {
  const row = await WaitlistEntry.findOne({
    where: {
      organization_id: organizationId,
      invite_cohort_id: cohortId,
      invite_token: token,
      status: 'invited',
      invite_expires_at: { [Op.gt]: new Date() }
    }
  })

  return row ? row.toJSON() : null
}
