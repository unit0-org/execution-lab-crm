import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const EventType = sequelize.define(
  'event_type',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    organization_id: DataTypes.UUID,
    name: { type: DataTypes.TEXT }
  },
  { tableName: 'event_type', timestamps: false }
)

EventType.associate = ({ OwnEvent }) => {
  EventType.hasMany(OwnEvent, { foreignKey: 'event_type_id' })
}

EventType.findIdByName = async function (organizationId, name) {
  if (!name) return null

  const row = await this.findOne({
    where: { organization_id: organizationId, name }
  })

  return row ? row.id : null
}
