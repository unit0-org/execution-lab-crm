import { Contact } from './Contact'
import { ContactEmail } from './ContactEmail'
import { ContactPhone } from './ContactPhone'

Contact.hasMany(ContactEmail, {
  foreignKey: 'contact_id',
  as: 'contact_email',
  onDelete: 'CASCADE'
})
ContactEmail.belongsTo(Contact, { foreignKey: 'contact_id' })

Contact.hasMany(ContactPhone, {
  foreignKey: 'contact_id',
  as: 'contact_phone',
  onDelete: 'CASCADE'
})
ContactPhone.belongsTo(Contact, { foreignKey: 'contact_id' })

export { Contact, ContactEmail, ContactPhone }
