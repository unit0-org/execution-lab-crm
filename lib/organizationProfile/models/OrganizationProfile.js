import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  organization_id: DataTypes.UUID,
  legal_name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  phone: DataTypes.TEXT,
  address_line1: DataTypes.TEXT,
  address_line2: DataTypes.TEXT,
  city: DataTypes.TEXT,
  region: DataTypes.TEXT,
  postal_code: DataTypes.TEXT,
  country: DataTypes.TEXT,
  tax_id: DataTypes.TEXT,
  logo_url: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}

export const OrganizationProfile =
  sequelize.define('organization_profile', fields, {
    tableName: 'organization_profile',
    timestamps: false
  })
