import { Op, literal } from 'sequelize'
import { PAYMENT_HOLD_CUTOFF, HOLD_HOURS }
  from '@/lib/cohort/controllers/holdPolicy'

// A pending registration still holds its seat while, EITHER its cohort
// starts before the pay-to-confirm cutoff (indefinite hold, the original
// behaviour), OR the hold window since it started (created_at) hasn't
// elapsed yet. Correlated so the seat-count queries stay a plain WHERE.
const stillHeld = [
  literal(`EXISTS (SELECT 1 FROM cohort c
    WHERE c.id = "registration"."cohort_id"
    AND c.start_date < '${PAYMENT_HOLD_CUTOFF}')`),
  literal(`"registration"."created_at"
    > NOW() - INTERVAL '${HOLD_HOURS} hours'`)
]

// The single definition of a taken seat: paid, or pending and still held.
// Computed at read from created_at — no seat state is ever stored.
export const confirmedScope = () => ({
  where: {
    [Op.or]: [{ status: 'paid' }, { status: 'pending', [Op.or]: stillHeld }]
  }
})
