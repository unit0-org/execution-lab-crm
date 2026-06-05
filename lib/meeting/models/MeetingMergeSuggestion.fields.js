import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const fields = {
  id,
  manual_meeting_id: DataTypes.UUID,
  google_meeting_id: DataTypes.UUID,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
