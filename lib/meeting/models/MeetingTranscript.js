import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const MeetingTranscript = sequelize.define('meeting_transcript', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  meeting_id: DataTypes.UUID,
  drive_file_id: DataTypes.TEXT,
  source_url: DataTypes.TEXT,
  text: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'meeting_transcript', timestamps: false })

MeetingTranscript.associate = ({ Meeting }) => {
  MeetingTranscript.belongsTo(Meeting, { foreignKey: 'meeting_id' })
}
