import { DataTypes } from 'sequelize'

const uuidPk = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

const jsonb = { type: DataTypes.JSONB, allowNull: false, defaultValue: {} }
const text = { type: DataTypes.TEXT, allowNull: false }

export const fields = {
  id: uuidPk,
  name: text,
  trigger_type: text,
  trigger_config: jsonb,
  action_type: text,
  action_config: jsonb,
  is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
