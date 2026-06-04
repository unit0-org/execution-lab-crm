import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const Organization = sequelize.define('organization', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'organization', timestamps: false })

Organization.associate = ({ OrganizationUser }) => {
  Organization.hasMany(OrganizationUser, {
    foreignKey: 'organization_id',
    as: 'member',
    onDelete: 'CASCADE'
  })
}
