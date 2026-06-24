import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'
import { RESOURCE_KIND_VALUES } from '../resourceKinds'

const id = {
  type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true
}

export const CohortResource = sequelize.define('cohort_resource', {
  id,
  cohort_id: DataTypes.UUID,
  session_label: DataTypes.TEXT,
  kind: { type: DataTypes.TEXT, validate: { isIn: [RESOURCE_KIND_VALUES] } },
  title: DataTypes.TEXT,
  url: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'cohort_resource',
  timestamps: false
})

CohortResource.associate = ({ Cohort }) => {
  CohortResource.belongsTo(Cohort, { foreignKey: 'cohort_id' })
}
