import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

const ts = DataTypes.DATE

export const fields = {
  id,
  contact_id: DataTypes.UUID,
  own_event_id: DataTypes.UUID,
  invited_at: ts,
  registered_at: ts,
  waitlisted_at: ts,
  not_going_at: ts,
  checked_in_at: ts,
  ticket_name: DataTypes.TEXT,
  amount_paid_cents: { type: DataTypes.INTEGER, defaultValue: 0 },
  currency: DataTypes.TEXT,
  coupon_code: DataTypes.TEXT
}
