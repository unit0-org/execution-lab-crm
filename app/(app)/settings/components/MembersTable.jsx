import { Table } from '@/ui/molecules/Table'
import { MemberRow } from './MemberRow'

const COLS = ['Member', 'Role', '']

export function MembersTable({ members, onChanged }) {
  return (
    <Table cols={COLS}>
      {members.map((member) => (
        <MemberRow key={member.id} member={member} onChanged={onChanged} />
      ))}
    </Table>
  )
}
