import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

export const RelationshipType = sequelize.define(
  'relationship_type',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    label: { type: DataTypes.TEXT, allowNull: false, unique: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'relationship_type', timestamps: false }
)
