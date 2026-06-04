import { sequelize } from '../../db/sequelize'
import { fields } from './MeetingMergeSuggestion.fields'

export const MeetingMergeSuggestion = sequelize.define(
  'meeting_merge_suggestion',
  fields,
  { tableName: 'meeting_merge_suggestion', timestamps: false }
)

MeetingMergeSuggestion.associate = ({ Meeting }) => {
  MeetingMergeSuggestion.belongsTo(Meeting, {
    foreignKey: 'manual_meeting_id',
    as: 'manual'
  })
  MeetingMergeSuggestion.belongsTo(Meeting, {
    foreignKey: 'google_meeting_id',
    as: 'google'
  })
}
