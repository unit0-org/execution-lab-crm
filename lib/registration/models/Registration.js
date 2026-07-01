import { sequelize } from '../../db/sequelize'
import { fields } from './Registration.fields'
import { confirmedScope } from './confirmedScope'

// A registration is "confirmed" — i.e. it holds a seat — while it's paid, or
// pending within its hold window (see confirmedScope). This is the single
// definition of a taken seat; query it via Registration.scope('confirmed'),
// never an inline status list.
export const Registration = sequelize.define('registration', fields, {
  tableName: 'registration',
  timestamps: false,
  scopes: {
    confirmed: confirmedScope
  }
})

Registration.associate = ({ Cohort, Contact }) => {
  Registration.belongsTo(Cohort, { foreignKey: 'cohort_id', as: 'cohort' })
  Registration.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
}
