import { Op } from 'sequelize'
import { WaitlistEntry } from '../models'

// Their 24h lapsed: mark every overdue invite 'expired' so the queue can
// advance to the next waiting person (Story 3.2).
export function expireStaleInvites(organizationId) {
  return WaitlistEntry.update({ status: 'expired' }, {
    where: {
      organization_id: organizationId,
      status: 'invited',
      invite_expires_at: { [Op.lte]: new Date() }
    }
  })
}
