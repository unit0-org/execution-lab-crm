import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { fillLinkedinIfEmpty } from './classMethods/fillLinkedinIfEmpty'
import { setBirthday } from './classMethods/setBirthday'

// Paranoid: a direct Contact.destroy() soft-deletes (sets deleted_at) so
// it can be restored; the contact-merge invariant force-deletes losers.
export const Contact = sequelize.define('contact', fields, {
  tableName: 'contact',
  timestamps: true,
  createdAt: false,
  updatedAt: false,
  paranoid: true,
  deletedAt: 'deleted_at'
})

Object.assign(Contact, { fillLinkedinIfEmpty, setBirthday })
