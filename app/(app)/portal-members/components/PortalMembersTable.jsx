import { Table } from '@/ui/molecules/Table'
import { PortalMemberRow } from './PortalMemberRow'

const COLS = ['Member', 'Email', 'Status', '']

export function PortalMembersTable({ members }) {
  return (
    <Table cols={COLS}>
      {members.map((member) => (
        <PortalMemberRow key={member.id} member={member} />
      ))}
    </Table>
  )
}
