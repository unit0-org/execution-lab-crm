import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

export const Contact = sequelize.define(
  'contact',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    organization_id: DataTypes.UUID,
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    linkedin_url: DataTypes.TEXT,
    photo_url: DataTypes.TEXT,
    birth_day: DataTypes.SMALLINT,
    birth_month: DataTypes.SMALLINT,
    birth_year: DataTypes.SMALLINT,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact', timestamps: false }
)
