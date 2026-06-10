import { sequelize } from '../../db/sequelize'
import { fields } from './Cohort.fields'

export const Cohort = sequelize.define('cohort', fields, {
  tableName: 'cohort',
  timestamps: false
})

Cohort.associate = ({ Registration }) => {
  Cohort.hasMany(Registration, {
    foreignKey: 'cohort_id',
    as: 'registration',
    onDelete: 'CASCADE'
  })
}
