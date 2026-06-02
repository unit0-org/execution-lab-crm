import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const GoogleAccount = sequelize.define(
  'google_account',
  {
    id,
    email: { type: DataTypes.TEXT, unique: true },
    refresh_token: DataTypes.TEXT,
    last_synced_at: DataTypes.DATE,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'google_account', timestamps: false }
)
