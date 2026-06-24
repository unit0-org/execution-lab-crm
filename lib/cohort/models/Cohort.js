import { sequelize } from '../../db/sequelize'
import { fields } from './Cohort.fields'
import { assignCohortSlug } from './assignCohortSlug'

// "open" is the only status that takes registrations or advances the
// waitlist (draft/closed are never shown); query Cohort.scope('open').
export const Cohort = sequelize.define('cohort', fields, {
  tableName: 'cohort',
  timestamps: false,
  hooks: { beforeCreate: assignCohortSlug },
  scopes: {
    open: { where: { status: 'open' } }
  }
})

Cohort.associate = ({ Registration, CohortFolder }) => {
  Cohort.hasMany(Registration, {
    foreignKey: 'cohort_id', as: 'registration', onDelete: 'CASCADE'
  })
  Cohort.hasMany(CohortFolder, {
    foreignKey: 'cohort_id', as: 'folder', onDelete: 'CASCADE'
  })
}
