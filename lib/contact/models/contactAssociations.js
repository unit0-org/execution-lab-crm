import { Contact } from './Contact'
import { ContactEmail } from './ContactEmail'
import { ContactPhone } from './ContactPhone'
import { ContactFact } from './ContactFact'
import { ContactNote } from './ContactNote'

// A contact's owned child rows (emails, phones, facts, notes); cascade delete.
const child = (model, as) => {
  Contact.hasMany(model, { foreignKey: 'contact_id', as, onDelete: 'CASCADE' })
  model.belongsTo(Contact, { foreignKey: 'contact_id' })
}

child(ContactEmail, 'contact_email')
child(ContactPhone, 'contact_phone')
child(ContactFact, 'contact_fact')
child(ContactNote, 'contact_note')
