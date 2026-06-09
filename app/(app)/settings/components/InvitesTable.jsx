import { Table } from '@/ui/molecules/Table'
import { InviteRow } from './InviteRow'

const COLS = ['Invited', 'Status', 'Link', '']

export function InvitesTable({ invites, onChanged }) {
  return (
    <Table cols={COLS}>
      {invites.map((invite) => (
        <InviteRow key={invite.id} invite={invite} onChanged={onChanged} />
      ))}
    </Table>
  )
}
