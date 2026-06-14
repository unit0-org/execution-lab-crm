import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const fields = {
  id,
  event_type_id: DataTypes.UUID,
  title: DataTypes.TEXT,
  url: DataTypes.TEXT,
  date: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
