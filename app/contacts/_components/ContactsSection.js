import { sectionHeader } from '../_styles'
import { ContactsTable } from './ContactsTable'

export function ContactsSection({ contacts, accountById }) {
  return (
    <section>
      <div style={sectionHeader}>
        <h2 style={{ fontSize: '1.05rem', margin: 0, color: '#333' }}>
          Contacts ({contacts.length})
        </h2>
      </div>
      <ContactsTable contacts={contacts} accountById={accountById} />
    </section>
  )
}
