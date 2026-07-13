import { DataTypes } from 'sequelize'

export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  contact_id: DataTypes.UUID,
  user_id: DataTypes.UUID,
  status: { type: DataTypes.TEXT, defaultValue: 'invited' },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
