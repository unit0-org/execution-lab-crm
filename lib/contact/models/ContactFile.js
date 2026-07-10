import { sequelize } from '@/lib/db/sequelize'
import { fields } from './ContactFile.fields'

export const ContactFile = sequelize.define(
  'contact_file',
  fields,
  { tableName: 'contact_file', timestamps: false }
)
