import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/sequelize'

const id = {
  type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true
}

export const EmailTemplate = sequelize.define('email_template', {
  id,
  template_key: DataTypes.TEXT,
  subject: DataTypes.TEXT,
  body: DataTypes.TEXT,
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'email_template', timestamps: false })
