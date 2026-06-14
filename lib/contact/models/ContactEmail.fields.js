import { DataTypes } from 'sequelize'
import { normalizeEmail } from '@/lib/contact/controllers/normalizeEmail'

export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  contact_id: DataTypes.UUID,
  email: {
    type: DataTypes.TEXT,
    set(value) {
      this.setDataValue('email', normalizeEmail(value))
    }
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
