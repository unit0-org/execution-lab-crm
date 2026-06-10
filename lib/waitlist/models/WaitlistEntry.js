import { sequelize } from '../../db/sequelize'
import { fields } from './WaitlistEntry.fields'

export const WaitlistEntry = sequelize.define('waitlist_entry', fields, {
  tableName: 'waitlist_entry',
  timestamps: false
})

WaitlistEntry.associate = ({ Contact, Cohort }) => {
  WaitlistEntry.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
  WaitlistEntry.belongsTo(Cohort, {
    foreignKey: 'invite_cohort_id',
    as: 'invite_cohort'
  })
}
