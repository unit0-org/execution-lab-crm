import { Op } from 'sequelize'
import { WaitlistEntry } from '../models'

// They registered and paid: remove them from the line by marking their
// waiting/invited entry 'converted' (Story 3.2 conversion-on-pay).
export function convertByEmail(organizationId, email) {
  return WaitlistEntry.update(
    { status: 'converted', converted_at: new Date() },
    {
      where: {
        organization_id: organizationId,
        email,
        status: { [Op.in]: ['waiting', 'invited'] }
      }
    }
  )
}
