import { DataTypes } from 'sequelize'

const fullName = (contact) =>
  [contact.first_name, contact.last_name].filter(Boolean).join(' ')

export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  first_name: DataTypes.TEXT,
  last_name: DataTypes.TEXT,
  full_name: {
    type: DataTypes.VIRTUAL,
    get() {
      return fullName(this)
    }
  },
  linkedin_url: DataTypes.TEXT,
  photo_url: DataTypes.TEXT,
  birth_day: DataTypes.SMALLINT,
  birth_month: DataTypes.SMALLINT,
  birth_year: DataTypes.SMALLINT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
