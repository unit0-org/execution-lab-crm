import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { markPaid } from './instanceMethods/markPaid'

export const Invoice = sequelize.define('invoice', fields, {
  tableName: 'invoice',
  timestamps: false,
  scopes: {
    // The invoices a member may see in the portal: ones finalized for them
    // (approved but not yet sent, sent, or paid). Drafts/void stay internal.
    memberVisible: { where: { status: ['approved', 'sent', 'paid'] } }
  }
})

Invoice.associate = ({ Contact, InvoiceLine }) => {
  Invoice.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
  Invoice.hasMany(InvoiceLine, {
    foreignKey: 'invoice_id',
    as: 'line',
    onDelete: 'CASCADE'
  })
}

Invoice.prototype.markPaid = markPaid
