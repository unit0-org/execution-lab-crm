import { sequelize } from '@/lib/db/sequelize'
import { fields } from './Notification.fields'

export const Notification = sequelize.define('notification', fields, {
  tableName: 'notification',
  timestamps: false
})

// A recipient's in-app inbox item, pointing at the source contact + note.
Notification.associate = ({ Contact, ContactNote }) => {
  Notification.belongsTo(Contact, { foreignKey: 'contact_id' })
  Notification.belongsTo(ContactNote, { foreignKey: 'contact_note_id' })
}
