import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

export const RelationshipType = sequelize.define(
  'relationship_type',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    organization_id: DataTypes.UUID,
    label: { type: DataTypes.TEXT, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'relationship_type', timestamps: false }
)
