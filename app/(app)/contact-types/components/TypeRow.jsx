import { TableRow } from '@/ui/Table'
import { TableCell } from '@/ui/TableCell'
import { Chip } from '@/ui/Chip'
import { DeleteButton } from './DeleteButton'

export function TypeRow({ type }) {
  return (
    <TableRow>
      <TableCell><Chip color={type.color}>{type.name}</Chip></TableCell>
      <TableCell tone="muted">{type.color}</TableCell>
      <TableCell align="right"><DeleteButton typeId={type.id} /></TableCell>
    </TableRow>
  )
}
