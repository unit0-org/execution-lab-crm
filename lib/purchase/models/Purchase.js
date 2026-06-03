import { sequelize } from '../../db/sequelize'
import { fields } from './Purchase.fields'

export const Purchase = sequelize.define('purchase', fields, {
  tableName: 'purchase',
  timestamps: false
})

Purchase.associate = ({ Contact }) => {
  Purchase.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
}
