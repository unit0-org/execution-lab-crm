import { Contact } from './Contact'
import { ContactEmail } from './ContactEmail'
import { EventType } from './EventType'
import { OwnEvent } from './OwnEvent'
import { EventParticipant } from './EventParticipant'

Contact.hasMany(ContactEmail, {
  foreignKey: 'contact_id',
  as: 'contact_email',
  onDelete: 'CASCADE'
})
ContactEmail.belongsTo(Contact, { foreignKey: 'contact_id' })

OwnEvent.belongsTo(EventType, {
  foreignKey: 'event_type_id',
  as: 'event_type'
})
OwnEvent.hasMany(EventParticipant, {
  foreignKey: 'own_event_id',
  as: 'participant',
  onDelete: 'CASCADE'
})
EventParticipant.belongsTo(Contact, {
  foreignKey: 'contact_id',
  as: 'contact'
})

export { Contact, ContactEmail, EventType, OwnEvent, EventParticipant }
