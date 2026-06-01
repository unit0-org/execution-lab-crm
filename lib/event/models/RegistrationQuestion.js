import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

export const RegistrationQuestion = sequelize.define(
  'registration_question',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    own_event_id: DataTypes.UUID,
    text: DataTypes.TEXT
  },
  { tableName: 'registration_question', timestamps: false }
)

// Find (or create) a question on an event and return its id.
RegistrationQuestion.upsertId = async function (ownEventId, text) {
  const [row] = await this.findOrCreate({
    where: { own_event_id: ownEventId, text }
  })

  return row.id
}
