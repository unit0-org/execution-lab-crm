import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { reserveNextNumber } from './instanceMethods/reserveNextNumber'

export const InvoiceSetting = sequelize.define('invoice_setting', fields, {
  tableName: 'invoice_setting',
  timestamps: false
})

InvoiceSetting.prototype.reserveNextNumber = reserveNextNumber
