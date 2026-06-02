import { sequelize } from '../../db/sequelize'
import { fields } from './MeetingParticipant.fields'

export const MeetingParticipant = sequelize.define(
  'meeting_participant',
  fields,
  { tableName: 'meeting_participant', timestamps: false }
)

MeetingParticipant.associate = ({ Meeting, Contact }) => {
  MeetingParticipant.belongsTo(Meeting, { foreignKey: 'meeting_id' })
  MeetingParticipant.belongsTo(Contact, {
    foreignKey: 'contact_id',
    as: 'contact'
  })
}
