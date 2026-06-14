import { Contact } from './Contact'
import { ContactRelationship } from './ContactRelationship'
import { RelationshipType } from './RelationshipType'

// A relationship points from one contact to another, optionally typed.
ContactRelationship.belongsTo(Contact, {
  foreignKey: 'from_contact_id', as: 'from_contact'
})
ContactRelationship.belongsTo(Contact, {
  foreignKey: 'to_contact_id', as: 'to_contact'
})
ContactRelationship.belongsTo(RelationshipType, {
  foreignKey: 'relationship_type_id', as: 'type'
})
