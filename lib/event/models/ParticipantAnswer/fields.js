import { DataTypes } from 'sequelize'

export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  event_participant_id: DataTypes.UUID,
  registration_question_id: DataTypes.UUID,
  answer: DataTypes.TEXT
}
