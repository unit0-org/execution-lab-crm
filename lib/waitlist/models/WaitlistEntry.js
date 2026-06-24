import { sequelize } from '../../db/sequelize'
import { fields } from './WaitlistEntry.fields'

// `active` = still in the waiting line. Once a seat is taken (accepted /
// converted) or the invite lapses (expired), the entry leaves the line.
export const WaitlistEntry = sequelize.define('waitlist_entry', fields, {
  tableName: 'waitlist_entry',
  timestamps: false,
  scopes: {
    active: { where: { status: ['waiting', 'invited'] } }
  }
})

WaitlistEntry.associate = ({ Contact, Cohort }) => {
  WaitlistEntry.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
  WaitlistEntry.belongsTo(Cohort, {
    foreignKey: 'invite_cohort_id',
    as: 'invite_cohort'
  })
}
