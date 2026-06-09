import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

// One unresolved field difference between a CRM contact and its Google
// person. resolved_at is set once the user picks a winning value.
export const SyncConflict = sequelize.define('sync_conflict', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  organization_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  google_account_id: DataTypes.UUID,
  resource_name: DataTypes.TEXT,
  field: DataTypes.TEXT,
  crm_value: DataTypes.TEXT,
  google_value: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  resolved_at: DataTypes.DATE
}, { tableName: 'sync_conflict', timestamps: false })
