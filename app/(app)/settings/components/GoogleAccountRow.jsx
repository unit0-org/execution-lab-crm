import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { timeAgo } from '@/ui/atoms/timeAgo'
import { PrimaryToggle } from './PrimaryToggle'
import { SyncToggle } from './SyncToggle'
import { DisconnectAccount } from './DisconnectAccount'

export function GoogleAccountRow({ account, onChanged }) {
  return (
    <Tr>
      <Td>{account.email}</Td>
      <Td><PrimaryToggle account={account} onChanged={onChanged} /></Td>
      <Td><SyncToggle account={account} onChanged={onChanged} /></Td>
      <Td>{timeAgo(account.contacts_synced_at)}</Td>
      <Td><DisconnectAccount id={account.id} onChanged={onChanged} /></Td>
    </Tr>
  )
}
