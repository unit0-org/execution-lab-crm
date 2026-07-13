import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { record } from './classMethods/record'

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

Object.assign(ParticipantAnswer, { record })
