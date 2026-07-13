import { DataTypes } from 'sequelize'
import { uuidPk } from '../columnTypes'

export const fields = {
  id: uuidPk(),
  organization_id: DataTypes.UUID,
  auto_create: { type: DataTypes.BOOLEAN, defaultValue: true },
  auto_send: { type: DataTypes.BOOLEAN, defaultValue: false },
  drive_folder_id: DataTypes.TEXT,
  from_name: DataTypes.TEXT,
  from_email: DataTypes.TEXT,
  number_prefix: { type: DataTypes.TEXT, defaultValue: 'INV-' },
  next_number: { type: DataTypes.INTEGER, defaultValue: 1 },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
