import { DataTypes } from 'sequelize'
import { uuidPk, money } from './columnTypes'

export const fields = {
  id: uuidPk,
  organization_id: DataTypes.UUID,
  contact_id: DataTypes.UUID,
  number: DataTypes.TEXT,
  status: { type: DataTypes.TEXT, defaultValue: 'draft' },
  currency: { type: DataTypes.TEXT, defaultValue: 'cad' },
  subtotal_cents: money,
  tax_rate: { type: DataTypes.DECIMAL, defaultValue: 0 },
  tax_cents: money,
  total_cents: money,
  notes: DataTypes.TEXT,
  bill_to_name: DataTypes.TEXT,
  bill_to_email: DataTypes.TEXT,
  bill_to_address: DataTypes.TEXT,
  source: { type: DataTypes.TEXT, defaultValue: 'manual' },
  stripe_charge_id: DataTypes.TEXT,
  purchase_id: DataTypes.UUID,
  pdf_url: DataTypes.TEXT,
  drive_file_id: DataTypes.TEXT,
  issued_at: DataTypes.DATE,
  due_at: DataTypes.DATE,
  sent_at: DataTypes.DATE,
  paid_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
