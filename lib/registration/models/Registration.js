import { sequelize } from '../../db/sequelize'
import { fields } from './Registration.fields'

// A registration is "confirmed" — i.e. it holds a seat — once it's pending
// or paid. This is the single definition of a taken seat; query it via
// Registration.scope('confirmed'), never an inline status list.
const CONFIRMED_STATUSES = ['pending', 'paid']

export const Registration = sequelize.define('registration', fields, {
  tableName: 'registration',
  timestamps: false,
  scopes: {
    confirmed: { where: { status: CONFIRMED_STATUSES } }
  }
})

Registration.associate = ({ Cohort, Contact }) => {
  Registration.belongsTo(Cohort, { foreignKey: 'cohort_id', as: 'cohort' })
  Registration.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
}
