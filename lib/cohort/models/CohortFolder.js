import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

const id = {
  type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true
}

export const CohortFolder = sequelize.define('cohort_folder', {
  id,
  cohort_id: DataTypes.UUID,
  name: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'cohort_folder',
  timestamps: false
})

CohortFolder.associate = ({ Cohort, CohortResource }) => {
  CohortFolder.belongsTo(Cohort, { foreignKey: 'cohort_id' })
  CohortFolder.hasMany(CohortResource, {
    foreignKey: 'folder_id', as: 'resource', onDelete: 'CASCADE'
  })
}
