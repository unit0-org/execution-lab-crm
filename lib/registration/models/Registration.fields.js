import { DataTypes } from 'sequelize'

const { UUID, UUIDV4, TEXT, INTEGER, DATE } = DataTypes
const id = { type: UUID, defaultValue: UUIDV4, primaryKey: true }

export const fields = {
  id,
  cohort_id: UUID, contact_id: UUID,
  first_name: TEXT, last_name: TEXT, preferred_name: TEXT,
  email: TEXT, phone: TEXT, company: TEXT, role: TEXT,
  referral_source: TEXT, linkedin: TEXT, website: TEXT,
  business: TEXT, stage: TEXT, obstacle: TEXT, commitment: TEXT,
  stripe_session_id: TEXT, stripe_payment_intent_id: TEXT,
  amount_total: INTEGER, currency: TEXT,
  promo_code: TEXT, discount_total: INTEGER, status: TEXT,
  created_at: { type: DATE, defaultValue: DataTypes.NOW },
  paid_at: DATE
}
