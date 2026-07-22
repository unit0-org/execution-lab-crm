import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

// A customer company we invoice. Paranoid: a direct destroy() soft-deletes
// (sets deleted_at) so it can be restored.
export const Company = sequelize.define('company', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: DataTypes.TEXT,
  legal_name: DataTypes.TEXT,
  address: DataTypes.TEXT,
  business_number: DataTypes.TEXT,
  invoice_email: DataTypes.TEXT,
  website: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'company',
  timestamps: true,
  createdAt: false,
  updatedAt: false,
  paranoid: true,
  deletedAt: 'deleted_at'
})
