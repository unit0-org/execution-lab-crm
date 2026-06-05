import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

export const Contact = sequelize.define(
  'contact',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    linkedin_url: DataTypes.TEXT,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact', timestamps: false }
)
