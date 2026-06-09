import { DataTypes } from 'sequelize'

const uuidPk = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const founderInviteFields = {
  id: uuidPk,
  token: DataTypes.TEXT,
  email: DataTypes.TEXT,
  invited_by: DataTypes.TEXT,
  organization_id: DataTypes.UUID,
  accepted_by_user_id: DataTypes.UUID,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  accepted_at: DataTypes.DATE
}
