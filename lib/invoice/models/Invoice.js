import { sequelize } from '../../db/sequelize'
import { fields } from './Invoice.fields'

export const Invoice = sequelize.define('invoice', fields, {
  tableName: 'invoice',
  timestamps: false
})

Invoice.associate = ({ Contact, InvoiceLine }) => {
  Invoice.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
  Invoice.hasMany(InvoiceLine, {
    foreignKey: 'invoice_id',
    as: 'line',
    onDelete: 'CASCADE'
  })
}
