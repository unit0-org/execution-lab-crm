import { RowSelectCell } from './RowSelectCell'
import { RowDeleteCell } from './RowDeleteCell'

// `plain` opts out of the row hover; `onClick` makes the row clickable.
// `select` adds a leading checkbox cell and `onDelete` the standard trailing
// delete button, so every table selects and deletes the same way.
export function Tr(props) {
  const { plain, onClick, select, onDelete, deleteTitle, children } = props
  const flag = plain || undefined
  const clickable = onClick ? '' : undefined

  return (
    <tr data-plain={flag} data-clickable={clickable} onClick={onClick}>
      <RowSelectCell select={select} />
      {children}
      <RowDeleteCell onDelete={onDelete} title={deleteTitle} />
    </tr>
  )
}
