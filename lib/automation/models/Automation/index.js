import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { activeForTrigger } from './classMethods/activeForTrigger'

export const Automation = sequelize.define('automation', fields, {
  tableName: 'automation',
  timestamps: false,
  scopes: { active: { where: { is_active: true } } }
})

Automation.associate = ({ AutomationRun }) => {
  Automation.hasMany(AutomationRun, { foreignKey: 'automation_id' })
}

Object.assign(Automation, { activeForTrigger })
