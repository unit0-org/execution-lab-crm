import { sequelize } from '../../db/sequelize'
import { fields } from './Purchase.fields'
import { earnedScope } from './earnedScope'

export const Purchase = sequelize.define('purchase', fields, {
  tableName: 'purchase',
  timestamps: false,
  scopes: {
    earned: earnedScope
  }
})

Purchase.associate = ({ Contact }) => {
  Purchase.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
}
