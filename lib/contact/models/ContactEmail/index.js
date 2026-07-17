import { sequelize } from '@/lib/db/sequelize'
import { fields } from './fields'
import { findContactId } from './classMethods/findContactId'
import { findTakenEmails } from './classMethods/findTakenEmails'

export const ContactEmail = sequelize.define('contact_email', fields, {
  tableName: 'contact_email',
  timestamps: false
})

Object.assign(ContactEmail, { findContactId, findTakenEmails })
