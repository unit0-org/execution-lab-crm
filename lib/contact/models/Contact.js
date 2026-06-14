import { sequelize } from '@/lib/db/sequelize'
import { fields } from './Contact.fields'

export const Contact = sequelize.define('contact', fields, {
  tableName: 'contact',
  timestamps: false
})

// Fill LinkedIn only when none is on file — never clobber an existing one.
Contact.fillLinkedinIfEmpty = function (orgId, id, linkedin) {
  return Contact.update(
    { linkedin_url: linkedin },
    { where: { id, organization_id: orgId, linkedin_url: null } }
  )
}

// Set the birthday parts (day/month/year) for one contact.
Contact.setBirthday = function (orgId, id, parts) {
  return Contact.update(parts, {
    where: { id, organization_id: orgId }
  })
}
