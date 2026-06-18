import { DataTypes } from 'sequelize'

const { UUID, UUIDV4, TEXT, DATE } = DataTypes

export const fields = {
  id: { type: UUID, defaultValue: UUIDV4, primaryKey: true },
  recipient_user_id: UUID,
  type: TEXT,
  contact_id: UUID,
  contact_note_id: UUID,
  actor_user_id: UUID,
  read_at: DATE,
  created_at: { type: DATE, defaultValue: DataTypes.NOW }
}
