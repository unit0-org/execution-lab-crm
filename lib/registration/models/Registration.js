import { sequelize } from '../../db/sequelize'
import { fields } from './Registration.fields'

export const Registration = sequelize.define('registration', fields, {
  tableName: 'registration',
  timestamps: false
})

Registration.associate = ({ Cohort, Contact }) => {
  Registration.belongsTo(Cohort, { foreignKey: 'cohort_id', as: 'cohort' })
  Registration.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
}
