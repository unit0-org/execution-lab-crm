import { Contact } from './Contact'
import { ContactEmail } from './ContactEmail'
import { ContactPhone } from './ContactPhone'
import { ContactFact } from './ContactFact'
import { ContactCategory } from './ContactCategory'

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
Contact.hasMany(ContactFact, {
  foreignKey: 'contact_id',
  as: 'contact_fact',
  onDelete: 'CASCADE'
})
ContactFact.belongsTo(Contact, { foreignKey: 'contact_id' })
Contact.belongsTo(ContactCategory, {
  foreignKey: 'category_id', as: 'category'
})

export { Contact, ContactEmail, ContactPhone, ContactFact, ContactCategory }
