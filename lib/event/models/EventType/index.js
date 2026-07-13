import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { findIdByName } from './classMethods/findIdByName'

export const EventType = sequelize.define(
  'event_type',
  fields,
  { tableName: 'event_type', timestamps: false }
)

EventType.associate = ({ OwnEvent }) => {
  EventType.hasMany(OwnEvent, { foreignKey: 'event_type_id' })
}

Object.assign(EventType, { findIdByName })
