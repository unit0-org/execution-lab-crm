import { sequelize } from '@/lib/db/sequelize'
import { fields } from './NoteMention.fields'

export const NoteMention = sequelize.define('note_mention', fields, {
  tableName: 'note_mention',
  timestamps: false
})

// Who was tagged in which note (the structured truth behind @Name text).
NoteMention.associate = ({ Contact, ContactNote }) => {
  NoteMention.belongsTo(Contact, { foreignKey: 'contact_id' })
  NoteMention.belongsTo(ContactNote, { foreignKey: 'contact_note_id' })
}
