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
    name: { type: DataTypes.TEXT, unique: true }
  },
  { tableName: 'event_type', timestamps: false }
)

EventType.associate = ({ OwnEvent }) => {
  EventType.hasMany(OwnEvent, { foreignKey: 'event_type_id' })
}

EventType.findIdByName = async function (name) {
  if (!name) return null

  const row = await this.findOne({ where: { name } })

  return row ? row.id : null
}
