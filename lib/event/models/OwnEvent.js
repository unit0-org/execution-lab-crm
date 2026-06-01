import { sequelize } from '../../db/sequelize'
import { fields } from './OwnEvent.fields'

export const OwnEvent = sequelize.define('own_event', fields, {
  tableName: 'own_event',
  timestamps: false
})

OwnEvent.associate = ({ EventType, EventParticipant }) => {
  OwnEvent.belongsTo(EventType, {
    foreignKey: 'event_type_id',
    as: 'event_type'
  })
  OwnEvent.hasMany(EventParticipant, {
    foreignKey: 'own_event_id',
    as: 'participant',
    onDelete: 'CASCADE'
  })
}
