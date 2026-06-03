import { sequelize } from '../../db/sequelize'
import { fields } from './MeetingAttachment.fields'

export const MeetingAttachment = sequelize.define(
  'meeting_attachment',
  fields,
  { tableName: 'meeting_attachment', timestamps: false }
)

MeetingAttachment.associate = ({ Meeting }) => {
  MeetingAttachment.belongsTo(Meeting, { foreignKey: 'meeting_id' })
}
