import { DataTypes, Op } from 'sequelize'
import { sequelize } from '../sequelize'

export const ContactEmail = sequelize.define(
  'contact_email',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    contact_id: DataTypes.UUID,
    email: { type: DataTypes.TEXT, unique: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_email', timestamps: false }
)

// Case-insensitive lookup of the contact that owns an email.
ContactEmail.findContactId = async function (email) {
  const row = await this.findOne({
    where: { email: { [Op.iLike]: email } }
  })

  return row ? row.contact_id : null
}
