import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'
import { COMPANY_ROLES } from './roles'

// Join row: a contact's role (owner/employee) at a company. Unique per
// (company_id, contact_id).
export const CompanyContact = sequelize.define('company_contact', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  role: {
    type: DataTypes.TEXT,
    defaultValue: 'employee',
    validate: { isIn: [COMPANY_ROLES] }
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'company_contact', timestamps: false })
