import { Table } from '@/ui/molecules/Table'
import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { rowColumns } from '@/ui/molecules/rowColumns'

const COLS = rowColumns(
  [{ label: 'Shared with', key: 'name' }, { label: 'Email', key: 'email' }],
  { deletable: true }
)

// Who can already see this offer; the trailing trash cell revokes access.
export function SharedWithTable({ people, onRemove }) {
  if (!people.length) return null

  return (
    <Table cols={COLS}>
      {people.map((person) => (
        <Tr key={person.contactId} deleteTitle="Remove access"
          onDelete={() => onRemove(person.contactId)}>
          <Td>{person.name}</Td>
          <Td truncate>{person.email}</Td>
        </Tr>
      ))}
    </Table>
  )
}
