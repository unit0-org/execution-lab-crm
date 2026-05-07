import { Table, TableBody } from '@/ui/Table'
import { EmptyState } from '@/ui/EmptyState'
import { TypesTableHead } from './TypesTableHead'
import { TypeRow } from './TypeRow'

export function TypesList({ types }) {
  if (!types.length) return <EmptyState>No types yet.</EmptyState>

  return (
    <Table>
      <TypesTableHead />
      <TableBody>
        {types.map((t) => <TypeRow key={t.id} type={t} />)}
      </TableBody>
    </Table>
  )
}
