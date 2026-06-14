import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

export const ContactPhone = sequelize.define(
  'contact_phone',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    contact_id: DataTypes.UUID,
    phone: DataTypes.TEXT,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_phone', timestamps: false }
)

ContactPhone.findContactId = async function (phone) {
  const row = await this.findOne({ where: { phone } })

  return row ? row.contact_id : null
}
