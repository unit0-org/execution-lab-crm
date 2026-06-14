import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

export const ContactCategory = sequelize.define(
  'contact_category',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    organization_id: DataTypes.UUID,
    name: { type: DataTypes.TEXT, allowNull: false },
    color: { type: DataTypes.TEXT },
    include_in_leads: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_category', timestamps: false }
)
