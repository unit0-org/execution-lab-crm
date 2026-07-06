import { Td } from './Td'
import { RowDelete } from './RowDelete'

// The trailing standard delete cell (trash + confirm), or nothing when the
// row isn't deletable. `title` labels the button and its confirm dialog.
export function RowDeleteCell({ onDelete, title }) {
  if (!onDelete) return null

  return (
    <Td>
      <RowDelete onConfirm={onDelete} title={title} />
    </Td>
  )
}
