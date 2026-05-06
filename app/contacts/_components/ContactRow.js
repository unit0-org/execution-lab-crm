import { td } from '../_styles/table'

const primaryEmail = (emails = []) =>
  emails.find((e) => e.is_primary)?.email || emails[0]?.email || ''

export function ContactRow({ contact, accountEmail }) {
  return (
    <tr>
      <td style={td}>{contact.display_name || '—'}</td>
      <td style={td}>{primaryEmail(contact.contact_emails)}</td>
      <td style={{ ...td, color: '#666' }}>{accountEmail || '—'}</td>
    </tr>
  )
}
