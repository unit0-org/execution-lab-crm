import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true
}

export const fields = {
  id,
  organization_id: DataTypes.UUID,
  slug: DataTypes.TEXT,
  label: DataTypes.TEXT,
  start_date: DataTypes.DATEONLY,
  registration_opens_at: DataTypes.DATEONLY,
  registration_closes_at: DataTypes.DATEONLY,
  capacity: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  stripe_price_id: DataTypes.TEXT,
  stripe_early_bird_price_id: DataTypes.TEXT,
  early_bird_deadline: DataTypes.DATEONLY,
  promo_code: DataTypes.TEXT,
  status: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
