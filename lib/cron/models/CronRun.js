import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const CronRun = sequelize.define('cron_run', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: { type: DataTypes.TEXT, allowNull: false },
  started_at: { type: DataTypes.DATE, allowNull: false },
  finished_at: DataTypes.DATE,
  ok: { type: DataTypes.BOOLEAN, allowNull: false },
  result: DataTypes.JSONB,
  error: DataTypes.TEXT
}, { tableName: 'cron_run', createdAt: 'created_at', updatedAt: false })
