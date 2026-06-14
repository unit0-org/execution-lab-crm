import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const ContactNote = sequelize.define(
  'contact_note',
  {
    id,
    contact_id: DataTypes.UUID,
    body: DataTypes.TEXT,
    noted_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_note', timestamps: false }
)
