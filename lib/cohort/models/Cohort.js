import { sequelize } from '../../db/sequelize'
import { fields } from './Cohort.fields'
import { assignCohortSlug } from './assignCohortSlug'

export const Cohort = sequelize.define('cohort', fields, {
  tableName: 'cohort',
  timestamps: false,
  hooks: { beforeCreate: assignCohortSlug }
})

Cohort.associate = ({ Registration }) => {
  Cohort.hasMany(Registration, {
    foreignKey: 'cohort_id',
    as: 'registration',
    onDelete: 'CASCADE'
  })
}
