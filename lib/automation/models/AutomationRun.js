import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

// A log of every automation firing. Deliberately holds no contact FK, so it
// stays out of the contact-merge fold-in invariant (person = free-text only).
export const AutomationRun = sequelize.define('automation_run', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  automation_id: { type: DataTypes.UUID, allowNull: false },
  trigger_type: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.TEXT, allowNull: false },
  detail: DataTypes.TEXT
}, { tableName: 'automation_run', createdAt: 'created_at', updatedAt: false })
