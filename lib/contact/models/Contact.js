import { sequelize } from '@/lib/db/sequelize'
import { fields } from './Contact.fields'

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

// Fill LinkedIn only when none is on file — never clobber an existing one.
Contact.fillLinkedinIfEmpty = function (id, linkedin) {
  return Contact.update(
    { linkedin_url: linkedin },
    { where: { id, linkedin_url: null } }
  )
}

// Set the birthday parts (day/month/year) for one contact.
Contact.setBirthday = function (id, parts) {
  return Contact.update(parts, { where: { id } })
}
