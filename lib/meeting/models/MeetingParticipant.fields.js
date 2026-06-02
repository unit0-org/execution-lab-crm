import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const fields = {
  id,
  meeting_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  email: DataTypes.TEXT,
  organizer: { type: DataTypes.BOOLEAN, defaultValue: false },
  response_status: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
