import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const MeetingNote = sequelize.define('meeting_note', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  meeting_id: DataTypes.UUID,
  body: DataTypes.TEXT,
  key: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'meeting_note', timestamps: false })

MeetingNote.associate = ({ Meeting }) => {
  MeetingNote.belongsTo(Meeting, { foreignKey: 'meeting_id' })
}
