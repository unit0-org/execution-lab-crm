import { sequelize } from '@/lib/db/sequelize'
import { fields } from './Notification.fields'

// A notification is "unread" until read_at is stamped; query the inbox
// badge and mark-read flows through Notification.scope('unread').
export const Notification = sequelize.define('notification', fields, {
  tableName: 'notification',
  timestamps: false,
  scopes: {
    unread: { where: { read_at: null } }
  }
})

// A recipient's in-app inbox item, pointing at the source contact + note.
Notification.associate = ({ Contact, ContactNote }) => {
  Notification.belongsTo(Contact, { foreignKey: 'contact_id' })
  Notification.belongsTo(ContactNote, { foreignKey: 'contact_note_id' })
}
