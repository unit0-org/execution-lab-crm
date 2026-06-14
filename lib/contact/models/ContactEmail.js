import { Op } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'
import { fields } from './ContactEmail.fields'

export const ContactEmail = sequelize.define('contact_email', fields, {
  tableName: 'contact_email',
  timestamps: false
})

// Case-insensitive lookup of the contact that owns an email, within an org.
ContactEmail.findContactId = async function (organizationId, email) {
  const row = await this.findOne({
    where: {
      organization_id: organizationId,
      email: { [Op.iLike]: email }
    }
  })

  return row ? row.contact_id : null
}
