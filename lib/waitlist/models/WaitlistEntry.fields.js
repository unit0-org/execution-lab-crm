import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true
}

export const fields = {
  id,
  organization_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  first_name: DataTypes.TEXT,
  last_name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  status: DataTypes.TEXT,
  invite_token: DataTypes.TEXT,
  invite_cohort_id: DataTypes.UUID,
  invited_at: DataTypes.DATE,
  invite_expires_at: DataTypes.DATE,
  converted_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
