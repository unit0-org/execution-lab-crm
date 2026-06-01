import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

export const OwnEvent = sequelize.define(
  'own_event',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    event_type_id: DataTypes.UUID,
    title: DataTypes.TEXT,
    url: DataTypes.TEXT,
    date: DataTypes.DATE,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'own_event', timestamps: false }
)
