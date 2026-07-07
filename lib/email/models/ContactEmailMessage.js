import { sequelize } from '../../db/sequelize'
import { fields } from './ContactEmailMessage.fields'

// A synced Gmail message linked to one contact. Folded into the winner on
// contact merge (claimContactRecords); the FK cascades on contact delete.
export const ContactEmailMessage = sequelize.define(
  'contact_email_message',
  fields,
  { tableName: 'contact_email_message', timestamps: false }
)

ContactEmailMessage.associate = (models) => {
  ContactEmailMessage.belongsTo(models.Contact, {
    foreignKey: 'contact_id',
    as: 'contact'
  })
}
