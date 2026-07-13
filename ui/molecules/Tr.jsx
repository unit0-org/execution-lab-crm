import { RowSelectCell } from './RowSelectCell'
import { RowDeleteCell } from './RowDeleteCell'

/**
 * Table row: `plain` opts out of the row hover, `onClick` makes it
 * clickable, `select={{ checked, onToggle }}` adds a leading checkbox
 * cell, and `onDelete` (+`deleteTitle`) the standard trailing
 * trash+confirm delete — the one way every table selects and deletes.
 */
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
