import { DataTypes } from 'sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const fields = {
  id,
  contact_id: DataTypes.UUID,
  gmail_message_id: DataTypes.TEXT,
  thread_id: DataTypes.TEXT,
  direction: DataTypes.TEXT,
  from_address: DataTypes.TEXT,
  to_address: DataTypes.TEXT,
  subject: DataTypes.TEXT,
  snippet: DataTypes.TEXT,
  sent_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
