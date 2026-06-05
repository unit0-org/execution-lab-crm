import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'
import { uuidPk, money } from './columnTypes'

const fields = {
  id: uuidPk,
  invoice_id: DataTypes.UUID,
  description: DataTypes.TEXT,
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  unit_amount_cents: money,
  amount_cents: money,
  position: { type: DataTypes.INTEGER, defaultValue: 0 },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}

export const InvoiceLine = sequelize.define('invoice_line', fields, {
  tableName: 'invoice_line',
  timestamps: false
})

InvoiceLine.associate = ({ Invoice }) => {
  InvoiceLine.belongsTo(Invoice, { foreignKey: 'invoice_id', as: 'invoice' })
}
