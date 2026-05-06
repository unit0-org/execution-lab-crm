import { TableRow } from '@/ui/Table'
import { TableCell } from '@/ui/TableCell'
import { Chip } from '@/ui/Chip'
import { DeleteLabelButton } from './DeleteLabelButton'

export function LabelRow({ label }) {
  return (
    <TableRow>
      <TableCell><Chip color={label.color}>{label.name}</Chip></TableCell>
      <TableCell tone="muted">{label.color}</TableCell>
      <TableCell align="right"><DeleteLabelButton labelId={label.id} /></TableCell>
    </TableRow>
  )
}
