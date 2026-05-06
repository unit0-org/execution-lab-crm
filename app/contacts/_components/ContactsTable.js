import { table, th } from '../_styles/table'
import { muted } from '../_styles'
import { ContactRow } from './ContactRow'

export function ContactsTable({ contacts, accountById }) {
  if (!contacts.length) {
    return <p style={muted}>No contacts yet. Connect an account and click Sync.</p>
  }
  return (
    <table style={table}>
      <thead>
        <tr>
          <th style={th}>Name</th>
          <th style={th}>Email</th>
          <th style={th}>Source account</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <ContactRow
            key={c.id}
            contact={c}
            accountEmail={accountById[c.google_account_id]?.email}
          />
        ))}
      </tbody>
    </table>
  )
}
