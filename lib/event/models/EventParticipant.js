import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const EventParticipant = sequelize.define(
  'event_participant',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    contact_id: DataTypes.UUID,
    own_event_id: DataTypes.UUID
  },
  { tableName: 'event_participant', timestamps: false }
)

EventParticipant.associate = ({ OwnEvent, Contact }) => {
  EventParticipant.belongsTo(OwnEvent, { foreignKey: 'own_event_id' })
  EventParticipant.belongsTo(Contact, {
    foreignKey: 'contact_id',
    as: 'contact'
  })
}
