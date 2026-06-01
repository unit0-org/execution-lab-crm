import { sequelize } from '../../db/sequelize'
import { fields } from './EventParticipant.fields'

export const EventParticipant = sequelize.define(
  'event_participant',
  fields,
  { tableName: 'event_participant', timestamps: false }
)

EventParticipant.associate = ({ OwnEvent, Contact }) => {
  EventParticipant.belongsTo(OwnEvent, { foreignKey: 'own_event_id' })
  EventParticipant.belongsTo(Contact, {
    foreignKey: 'contact_id',
    as: 'contact'
  })
}
