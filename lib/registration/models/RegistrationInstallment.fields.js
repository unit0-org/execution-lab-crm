import { DataTypes } from 'sequelize'

const { UUID, UUIDV4, TEXT, INTEGER, DATE, DATEONLY } = DataTypes
const id = { type: UUID, defaultValue: UUIDV4, primaryKey: true }

// No amount column on purpose: what is owed is derived at charge time from
// the seat's price less what Stripe captured (see the derive-money rule).
export const fields = {
  id,
  registration_id: UUID,
  due_on: DATEONLY,
  stripe_payment_intent_id: TEXT,
  stripe_charge_id: TEXT,
  attempt_count: { type: INTEGER, defaultValue: 0 },
  last_attempt_at: DATE,
  last_failure: TEXT,
  created_at: { type: DATE, defaultValue: DataTypes.NOW }
}
