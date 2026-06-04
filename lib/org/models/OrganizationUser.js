import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const OrganizationUser = sequelize.define('organization_user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  organization_id: DataTypes.UUID,
  user_id: DataTypes.UUID,
  email: DataTypes.TEXT,
  role: { type: DataTypes.TEXT, defaultValue: 'member' },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'organization_user', timestamps: false })

OrganizationUser.associate = ({ Organization }) => {
  OrganizationUser.belongsTo(Organization, { foreignKey: 'organization_id' })
}
