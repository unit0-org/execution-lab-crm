import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const ParticipantAnswer = sequelize.define(
  'participant_answer',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    event_participant_id: DataTypes.UUID,
    registration_question_id: DataTypes.UUID,
    answer: DataTypes.TEXT
  },
  { tableName: 'participant_answer', timestamps: false }
)

// Save one answer, refreshing it if the participant already answered.
ParticipantAnswer.record = async function (participantId, questionId, answer) {
  const [row, created] = await this.findOrCreate({
    where: {
      event_participant_id: participantId,
      registration_question_id: questionId
    },
    defaults: { answer }
  })

  if (!created) await row.update({ answer })
}
