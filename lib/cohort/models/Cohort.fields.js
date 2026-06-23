import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true
}

export const fields = {
  id,
  slug: DataTypes.TEXT,
  label: DataTypes.TEXT,
  start_date: DataTypes.DATEONLY,
  registration_opens_at: DataTypes.DATEONLY,
  registration_closes_at: DataTypes.DATEONLY,
  capacity: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  stripe_price_id: DataTypes.TEXT,
  promo_code: DataTypes.TEXT,
  status: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
