import { table, th } from '../_styles/table'
import { muted } from '../_styles'
import { AccountRow } from './AccountRow'

export function AccountsTable({ accounts }) {
  if (!accounts.length) return <p style={muted}>No accounts connected yet.</p>
  return (
    <table style={table}>
      <thead>
        <tr>
          <th style={th}>Email</th>
          <th style={th}>Last synced</th>
          <th style={{ ...th, textAlign: 'right' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((a) => <AccountRow key={a.id} account={a} />)}
      </tbody>
    </table>
  )
}
