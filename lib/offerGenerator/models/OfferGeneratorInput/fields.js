import { DataTypes } from 'sequelize'

export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  offer_id: DataTypes.UUID,
  input_type: DataTypes.TEXT,
  value: DataTypes.TEXT,
  active: { type: DataTypes.BOOLEAN, defaultValue: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
