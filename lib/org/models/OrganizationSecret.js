import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  organization_id: DataTypes.UUID,
  kind: DataTypes.TEXT,
  ciphertext: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}

// The composite unique index lets upsert REPLACE a secret in place
// (ON CONFLICT on organization_id + kind) instead of inserting a dup.
const options = {
  tableName: 'organization_secret',
  timestamps: false,
  indexes: [{ unique: true, fields: ['organization_id', 'kind'] }]
}

export const OrganizationSecret =
  sequelize.define('organization_secret', fields, options)
