import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const ContactFact = sequelize.define(
  'contact_fact',
  {
    id,
    contact_id: DataTypes.UUID,
    label: DataTypes.TEXT,
    value: DataTypes.TEXT,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_fact', timestamps: false }
)
