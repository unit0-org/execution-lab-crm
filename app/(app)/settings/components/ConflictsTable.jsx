import { Table } from '@/ui/molecules/Table'
import { Text } from '@/ui/atoms/Text'
import { ConflictRow } from './ConflictRow'

const COLS = ['Contact', 'Field', 'In CRM', 'In Google', '']

export function ConflictsTable({ conflicts, onResolved }) {
  if (!conflicts.length) return <Text tone="muted">No conflicts.</Text>

  return (
    <Table cols={COLS}>
      {conflicts.map((conflict) => (
        <ConflictRow key={conflict.id} conflict={conflict}
          onResolved={onResolved} />
      ))}
    </Table>
  )
}
