import { Op } from 'sequelize'
import { stillHeld } from './heldPredicate'

// The single definition of a taken seat: paid, or pending and still within
// its hold (2 hours self-serve, 7 days when staff reserved it — see
// heldPredicate). A cancelled reservation matches neither, so cancelling
// releases the seat immediately.
export const confirmedScope = () => ({
  where: {
    [Op.or]: [
      { status: 'paid' },
      { [Op.and]: [{ status: 'pending' }, stillHeld] }
    ]
  }
})
