import { sequelize } from '../../db/sequelize'
import { fields } from './ParticipantAnswer.fields'

export const ParticipantAnswer = sequelize.define(
  'participant_answer',
  fields,
  { tableName: 'participant_answer', timestamps: false }
)

ParticipantAnswer.associate = ({ EventParticipant, RegistrationQuestion }) => {
  ParticipantAnswer.belongsTo(EventParticipant, {
    foreignKey: 'event_participant_id'
  })
  ParticipantAnswer.belongsTo(RegistrationQuestion, {
    foreignKey: 'registration_question_id'
  })
}

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
