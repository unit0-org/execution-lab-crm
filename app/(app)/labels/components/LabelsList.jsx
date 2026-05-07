import { Table, TableBody } from '@/ui/Table'
import { EmptyState } from '@/ui/EmptyState'
import { LabelsTableHead } from './LabelsTableHead'
import { LabelRow } from './LabelRow'

export function LabelsList({ labels }) {
  if (!labels.length) return <EmptyState>No labels yet.</EmptyState>
  return (
    <Table>
      <LabelsTableHead />
      <TableBody>
        {labels.map((l) => <LabelRow key={l.id} label={l} />)}
      </TableBody>
    </Table>
  )
}
