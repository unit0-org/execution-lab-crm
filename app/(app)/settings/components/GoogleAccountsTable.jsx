import { Table } from '@/ui/molecules/Table'
import { GoogleAccountRow } from './GoogleAccountRow'

const COLS = ['Account', 'Primary', 'Sync', 'Last synced', '']

export function GoogleAccountsTable({ accounts, onChanged }) {
  return (
    <Table cols={COLS}>
      {accounts.map((account) => (
        <GoogleAccountRow key={account.id} account={account}
          onChanged={onChanged} />
      ))}
    </Table>
  )
}
