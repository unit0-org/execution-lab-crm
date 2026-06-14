import { sequelize } from '../../db/sequelize'
import { fields } from './InvoiceSetting.fields'

const pad = (n) => String(n).padStart(4, '0')

export const InvoiceSetting = sequelize.define('invoice_setting', fields, {
  tableName: 'invoice_setting',
  timestamps: false
})

// Reserve and return this org's next sequential invoice number.
InvoiceSetting.prototype.reserveNextNumber = async function () {
  const number = `${this.number_prefix}${pad(this.next_number)}`

  await this.update({ next_number: this.next_number + 1 })

  return number
}
