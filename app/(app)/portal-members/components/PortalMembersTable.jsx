import { Table } from '@/ui/molecules/Table'
import { PortalMemberRow } from './PortalMemberRow'

const COLS = ['Member', 'Email', 'Status', 'Tools', '']

export function PortalMembersTable({ members, tools }) {
  return (
    <Table cols={COLS}>
      {members.map((member) => (
        <PortalMemberRow key={member.id} member={member} tools={tools} />
      ))}
    </Table>
  )
}
