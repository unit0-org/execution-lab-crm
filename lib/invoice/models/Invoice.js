import { sequelize } from '../../db/sequelize'
import { fields } from './Invoice.fields'

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

// Mark this invoice paid, stamping the payment time.
Invoice.prototype.markPaid = function () {
  return this.update({ status: 'paid', paid_at: new Date() })
}
