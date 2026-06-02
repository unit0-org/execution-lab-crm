import { sequelize } from '../../db/sequelize'
import { fields } from './Meeting.fields'

export const Meeting = sequelize.define('meeting', fields, {
  tableName: 'meeting',
  timestamps: false
})

Meeting.associate = ({ MeetingParticipant }) => {
  Meeting.hasMany(MeetingParticipant, {
    foreignKey: 'meeting_id',
    as: 'participant',
    onDelete: 'CASCADE'
  })
}
