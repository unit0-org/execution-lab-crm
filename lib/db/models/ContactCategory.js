import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

export const ContactCategory = sequelize.define(
  'contact_category',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: { type: DataTypes.TEXT, allowNull: false, unique: true },
    include_in_leads: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_category', timestamps: false }
)
