import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

// Links a CRM contact to its Google person (per Google account), with the
// People API resource_name + etag used for incremental sync.
export const ContactGoogleLink = sequelize.define('contact_google_link', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  organization_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  google_account_id: DataTypes.UUID,
  resource_name: DataTypes.TEXT,
  etag: DataTypes.TEXT,
  last_synced_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'contact_google_link', timestamps: false })
