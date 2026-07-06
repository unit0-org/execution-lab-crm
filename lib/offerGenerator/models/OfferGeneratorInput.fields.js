import { DataTypes } from 'sequelize'

export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  contact_id: DataTypes.UUID,
  input_type: DataTypes.TEXT,
  value: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
