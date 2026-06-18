import { DataTypes } from 'sequelize'

const { UUID, UUIDV4, DATE } = DataTypes

export const fields = {
  id: { type: UUID, defaultValue: UUIDV4, primaryKey: true },
  contact_note_id: UUID,
  contact_id: UUID,
  mentioned_user_id: UUID,
  created_at: { type: DATE, defaultValue: DataTypes.NOW }
}
