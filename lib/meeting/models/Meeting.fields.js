import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const fields = {
  id,
  google_event_id: DataTypes.TEXT,
  title: DataTypes.TEXT,
  starts_at: DataTypes.DATE,
  ends_at: DataTypes.DATE,
  url: DataTypes.TEXT,
  source: { type: DataTypes.TEXT, defaultValue: 'google_calendar' },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
