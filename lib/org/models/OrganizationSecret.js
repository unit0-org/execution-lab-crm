import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const OrganizationSecret = sequelize.define('organization_secret', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  organization_id: DataTypes.UUID,
  kind: DataTypes.TEXT,
  ciphertext: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'organization_secret', timestamps: false })
