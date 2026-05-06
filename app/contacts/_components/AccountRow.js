import { td } from '../_styles/table'
import { AccountActions } from './AccountActions'

export function AccountRow({ account }) {
  return (
    <tr>
      <td style={td}>{account.email}</td>
      <td style={{ ...td, color: '#666' }}>
        {account.last_synced_at
          ? new Date(account.last_synced_at).toLocaleString()
          : 'never'}
      </td>
      <td style={{ ...td, textAlign: 'right' }}>
        <AccountActions accountId={account.id} />
      </td>
    </tr>
  )
}
