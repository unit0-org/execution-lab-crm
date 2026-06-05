import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const fields = {
  id,
  organization_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  stripe_id: DataTypes.TEXT,
  email: DataTypes.TEXT,
  amount_cents: { type: DataTypes.INTEGER, defaultValue: 0 },
  currency: DataTypes.TEXT,
  product: DataTypes.TEXT,
  status: DataTypes.TEXT,
  purchased_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
