import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true
}

export const fields = {
  id,
  organization_id: DataTypes.UUID,
  cohort_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  first_name: DataTypes.TEXT,
  last_name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  phone: DataTypes.TEXT,
  company: DataTypes.TEXT,
  role: DataTypes.TEXT,
  referral_source: DataTypes.TEXT,
  stripe_session_id: DataTypes.TEXT,
  stripe_payment_intent_id: DataTypes.TEXT,
  amount_total: DataTypes.INTEGER,
  currency: DataTypes.TEXT,
  promo_code: DataTypes.TEXT,
  discount_total: DataTypes.INTEGER,
  status: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  paid_at: DataTypes.DATE
}
