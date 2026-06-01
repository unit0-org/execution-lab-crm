import { DataTypes } from 'sequelize'

export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  contact_id: DataTypes.UUID,
  own_event_id: DataTypes.UUID,
  invited_at: DataTypes.DATE,
  registered_at: DataTypes.DATE,
  waitlisted_at: DataTypes.DATE,
  not_going_at: DataTypes.DATE,
  checked_in_at: DataTypes.DATE,
  ticket_name: DataTypes.TEXT,
  amount_paid_cents: { type: DataTypes.INTEGER, defaultValue: 0 },
  currency: DataTypes.TEXT,
  coupon_code: DataTypes.TEXT
}
