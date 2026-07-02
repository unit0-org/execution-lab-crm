import { Op, literal } from 'sequelize'
import { HOLD_HOURS } from '@/lib/cohort/controllers/holdPolicy'

// A registration holds a seat when it's paid, or pending and still within
// its hold: the seat is reserved for HOLD_HOURS from when it started
// (created_at), after which an unpaid seat releases. Computed at read from
// created_at — no seat state is ever stored.
const stillHeld = literal(
  `"registration"."created_at" > NOW() - INTERVAL '${HOLD_HOURS} hours'`
)

// The single definition of a taken seat.
export const confirmedScope = () => ({
  where: {
    [Op.or]: [
      { status: 'paid' },
      { [Op.and]: [{ status: 'pending' }, stillHeld] }
    ]
  }
})
