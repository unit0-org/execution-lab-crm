import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

export const EventType = sequelize.define(
  'event_type',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: { type: DataTypes.TEXT, unique: true }
  },
  { tableName: 'event_type', timestamps: false }
)
