import { DataTypes } from 'sequelize'

export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  offer_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
