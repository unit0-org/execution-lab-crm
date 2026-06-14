import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const SyncState = sequelize.define('sync_state', {
  name: { type: DataTypes.TEXT, primaryKey: true },
  last_synced_at: DataTypes.DATE
}, { tableName: 'sync_state', timestamps: false })
